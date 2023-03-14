import * as THREE from 'three';

export const getPointLight = (): THREE.PointLight => {
    const light = new THREE.PointLight('white', 2, 10);
    light.position.set(1, 3, 4);
    light.castShadow = true;

    return light;
}