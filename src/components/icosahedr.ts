import * as THREE from 'three';

export const getIcosahedr = (): THREE.Mesh => {
    const geometry = new THREE.IcosahedronGeometry(2);
    const material = new THREE.MeshStandardMaterial();
    const icosahedr = new THREE.Mesh(geometry, material);
    icosahedr.position.set(-4.5, 1.6, 0);
    icosahedr.castShadow = true;
    return icosahedr;
};
