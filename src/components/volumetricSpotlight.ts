import * as THREE from 'three';

type TPosition = {
    x: number;
    y: number;
    z: number;
}
interface IVolumatricSpotLightProps {
    position: TPosition;
    color: string;
}
export const getVolumetricSpotLight = ({ position, color }: IVolumatricSpotLightProps) => {
    const VolumetricSpotLightMaterial = () => {
        const vertexShader = [
            'varying vec3 vNormal;',
            'varying vec3 vWorldPosition;',
            'void main(){',
            '// compute intensity',
            'vNormal        = normalize( normalMatrix * normal );',
            'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
            'vWorldPosition     = worldPosition.xyz;',
            '// set gl_Position',
            'gl_Position    = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            '}',
        ].join('\n')
        const fragmentShader = [
            'varying vec3       vNormal;',
            'varying vec3       vWorldPosition;',
            'uniform vec3       lightColor;',
            'uniform vec3       spotPosition;',
            'uniform float      attenuation;',
            'uniform float      anglePower;',
            'void main(){',
            'float intensity;',
            //////////////////////////////////////////////////////////
            // distance attenuation                 //
            //////////////////////////////////////////////////////////
            'intensity  = distance(vWorldPosition, spotPosition)/attenuation / 30.0;',
            'intensity  = 1.0 - clamp(intensity, 0.0, -1.0);',
            //////////////////////////////////////////////////////////
            // intensity on angle                   //
            //////////////////////////////////////////////////////////
            'vec3 normal    = vec3(vNormal.x, vNormal.y, abs(vNormal.z));',
            'float angleIntensity   = pow( dot(normal, vec3(0.0, 0.0, 1.0)), anglePower );',
            'intensity  = intensity * angleIntensity;',
            // 'gl_FragColor    = vec4( lightColor, intensity );',
            //////////////////////////////////////////////////////////
            // final color                      //
            //////////////////////////////////////////////////////////
            // set the final color
            'gl_FragColor   = vec4( lightColor, intensity);',
            '}',
        ].join('\n')
        // create custom material from the shader code above
        //   that is within specially labeled script tags
        const material = new THREE.ShaderMaterial({
            uniforms: {
                attenuation: {
                    value: 4.4
                },
                anglePower: {
                    value: 2.6
                },
                spotPosition: {
                    value: new THREE.Vector3(0, 0, 0)
                },
                lightColor: {
                    value: new THREE.Color(color)
                },
            },

            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthWrite: false,
        });
        return material;
    };
    const geometry = new THREE.CylinderGeometry(2, 30, 100, 32 * 2, 20, true);

    geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -geometry.parameters.height / 2, 0));
    geometry.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    const material = VolumetricSpotLightMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    const { x, y, z } = position;
    mesh.position.set(x, y, z);
    mesh.lookAt(new THREE.Vector3(0, 0, 0))
    material.uniforms.lightColor.value.set(color);
    material.uniforms.spotPosition.value = mesh.position;
    return mesh;
};