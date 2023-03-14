import * as THREE from 'three';

export const getDoor = (): THREE.Mesh => {
    const textureLoader = new THREE.TextureLoader();

    const texture = textureLoader.load('/textures/door/color.jpg');
    const normalTexture = textureLoader.load('/textures/door/normal.jpg');
    const heightTexture = textureLoader.load('/textures/door/height.jpg');
    const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
    const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
    const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg');
    const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');

    const geometry = new THREE.PlaneGeometry(5, 5, 100, 100);
    const material = new THREE.MeshStandardMaterial({
        transparent: true,
        map: texture,
        alphaMap: alphaTexture,
        alphaTest: 0.5,
        normalMap: normalTexture,
        metalnessMap: metalnessTexture,
        roughnessMap: roughnessTexture,
        aoMap: ambientOcclusionTexture,
        displacementMap: heightTexture,
        displacementScale: 0.1,
        shadowSide: THREE.FrontSide,
        side: THREE.DoubleSide
    });
    const door = new THREE.Mesh(geometry, material);
    door.position.y = 2.299;
    door.castShadow = true;
    // @ts-ignore
    door.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2));

    return door;
}