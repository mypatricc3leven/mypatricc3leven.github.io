// ===== Planet Eleven 3D - Part 1 =====

// Sahna
const scene = new THREE.Scene();

// Kamera
const camera = new THREE.PerspectiveCamera(
    75,
    300 / 300,
    0.1,
    1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(300, 300);

// Renderer'ni sahifaga joylash
document.getElementById("planet3d").appendChild(renderer.domElement);

// Sayyora
const geometry = new THREE.SphereGeometry(2, 64, 64);

const material = new THREE.MeshStandardMaterial({
    color: 0x1e90ff,
    roughness: 0.8,
    metalness: 0.2
});

const planet = new THREE.Mesh(geometry, material);

scene.add(planet);

// Yorug'lik
const light = new THREE.PointLight(0xffffff, 5);

light.position.set(5, 5, 5);

scene.add(light);

// Muhit yorug'ligi
scene.add(new THREE.A
