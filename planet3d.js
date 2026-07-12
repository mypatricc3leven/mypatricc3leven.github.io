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
// ===============================
// PART 2 - STARS
// ===============================

const starGeometry = new THREE.BufferGeometry();

const starVertices = [];

for (let i = 0; i < 5000; i++) {

    starVertices.push(
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 800,
        (Math.random() - 0.5) * 800
    );

}

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
        starVertices,
        3
    )
);

const starMaterial = new THREE.PointsMaterial({

    color:0xffffff,

    size:0.6

});

const stars = new THREE.Points(

    starGeometry,

    starMaterial

);

scene.add(stars);

// Orbit Ring

const ringGeometry = new THREE.TorusGeometry(

2.8,

0.02,

16,

200

);

const ringMaterial = new THREE.MeshBasicMaterial({

color:0x66ccff,

transparent:true,

opacity:0.35

});

const orbitRing = new THREE.Mesh(

ringGeometry,

ringMaterial

);

orbitRing.rotation.x = Math.PI / 2;

scene.add(orbitRing);
// ===============================
// PART 3 - ANIMATION & CONTROLS
// ===============================

// Drag Control
let isDragging = false;
let previousX = 0;

renderer.domElement.addEventListener("pointerdown", (e) => {
    isDragging = true;
    previousX = e.clientX;
});

window.addEventListener("pointerup", () => {
    isDragging = false;
});

window.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const delta = e.clientX - previousX;

    planet.rotation.y += delta * 0.01;
    atmosphere.rotation.y += delta * 0.01;

    previousX = e.clientX;
});

// Responsive
window.addEventListener("resize", () => {

    camera.aspect =
        container.clientWidth /
        container.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        container.clientWidth,
        container.clientHeight
    );

});

// Animation
function animate() {

    requestAnimationFrame(animate);

    planet.rotation.y += 0.0025;
    atmosphere.rotation.y += 0.003;

    stars.rotation.y += 0.0002;
    stars.rotation.x += 0.00005;

    orbitRing.rotation.z += 0.0015;

    renderer.render(scene, camera);

}

animate();
