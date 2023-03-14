import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

export const getControls = (camera: THREE.Camera, renderer: THREE.Renderer): OrbitControls => {
    return new OrbitControls(camera, renderer.domElement);
};

export const getTransformControls = (camera: THREE.Camera, renderer: THREE.Renderer, orbit: OrbitControls) => {
    const controls = new TransformControls(camera, renderer.domElement);
    controls.setMode('translate');
    controls.addEventListener('dragging-changed', function (event) {
        orbit.enabled = !event.value;
    });
    return controls;
}