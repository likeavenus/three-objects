import * as THREE from 'three';
import './style.css';
import { getPlane } from './components/plane';
import { getControls } from './components/controls';
// import { getSpotLight } from './components/spotlight';
import { VOLUMETRIC_SPOTLIGHT1, VOLUMETRIC_SPOTLIGHT2, VOLUMETRIC_SPOTLIGHT3 } from './constants';
import { getVolumetricSpotLight } from './components/volumetricSpotlight';
import { getDoor } from './components/door';
import { getPointLight } from './components/pointlight';
import { getIcosahedr } from './components/icosahedr';
import { getDonut } from './components/donat';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


scene.fog = new THREE.FogExp2('rgb(255,255,255)', 0.001);

// const volumetricSpotlight_1 = getVolumetricSpotLight({ ...VOLUMETRIC_SPOTLIGHT1 });
// const volumetricSpotlight_2 = getVolumetricSpotLight({ ...VOLUMETRIC_SPOTLIGHT2 });
// const volumetricSpotlight_3 = getVolumetricSpotLight({ ...VOLUMETRIC_SPOTLIGHT3 });


// scene.add(volumetricSpotlight_1, volumetricSpotlight_2, volumetricSpotlight_3);

camera.position.set(0, 2, 7);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);

const plane = getPlane();

scene.add(plane);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg') as HTMLCanvasElement,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const orbitControls = getControls(camera, renderer);

const ambientLight = new THREE.AmbientLight('rgb(50, 1, 205)', 0.3);
scene.add(ambientLight);

const door = getDoor();
const pointLight = getPointLight();
const pointlightHelper = new THREE.PointLightHelper(pointLight);
const icosahedr = getIcosahedr();
const donut = getDonut();

scene.add(door, pointLight, pointlightHelper, icosahedr, donut);

const clock = new THREE.Clock();

(async () => {


  function animate() {
    const currentTime = clock.getElapsedTime();
    pointLight.position.x = Math.sin(currentTime) - 0.5;
    pointLight.position.z = Math.cos(currentTime) + 4;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    orbitControls.update();
  }
  animate()

})();






