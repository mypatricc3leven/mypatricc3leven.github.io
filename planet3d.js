// ===============================
// PLANET ELEVEN 3D
// PART 1
// ===============================

// Scene
const scene = new THREE.Scene();
scene.background = null;

// Camera
const camera = new THREE.PerspectiveCamera(
70,
window.innerWidth / window.innerHeight,
0.1,
1000
);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
antialias:true,
alpha:true
});

renderer.setPixelRatio(window.devicePixelRatio);

const container=document.getElementById("planet3d");

renderer.setSize(
container.clientWidth,
container.clientHeight
);

container.appendChild(renderer.domElement);

// Lights
const ambient=new THREE.AmbientLight(0xffffff,1.2);
scene.add(ambient);

const sun=new THREE.DirectionalLight(0xffffff,3);

sun.position.set(5,3,5);

scene.add(sun);

// Planet
const planetGeometry=new THREE.SphereGeometry(
2,
128,
128
);

const planetMaterial=new THREE.MeshStandardMaterial({

color:0x2b8cff,

roughness:0.8,

metalness:0.15,

emissive:0x001133,

emissiveIntensity:0.4

});

const planet=new THREE.Mesh(
planetGeometry,
planetMaterial
);

scene.add(planet);

// Atmosphere
const atmosphere
