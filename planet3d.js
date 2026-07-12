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
scene.add(new THREE.AmbientLight(0x404040, 3));

camera.position.z = 5;

function animate() {

    requestAnimationFrame(animate);

    planet.rotation.y += 0.003;

    renderer.render(scene, camera);

}

animate();
// ===== Planet Eleven 3D - Part 2 =====

// Yulduzlar
const starGeometry = new THREE.BufferGeometry();

const starCount = 2000;
const starVertices = [];

for (let i = 0; i < starCount; i++) {

    starVertices.push(
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
    );

}

starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
);

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.7
});

const stars = new THREE.Points(starGeometry, starMaterial);

scene.add(stars);

// Sayyora nuri
planet.material.emissive = new THREE.Color(0x003366);
planet.material.emissiveIntensity = 0.5;
