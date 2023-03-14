import * as THREE from 'three';

export const getDonut = (): THREE.Mesh => {
    const geometry = new THREE.TorusGeometry(2, 0.8);
    const material = new THREE.MeshStandardMaterial({
        roughness: 0.45,
        metalness: 0.65,
    });

    const donut = new THREE.Mesh(geometry, material);
    donut.castShadow = true;
    donut.position.set(6, 3, 0);
    return donut;
};