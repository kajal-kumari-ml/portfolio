// Three.js Background Animation
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0';

const initThreeBackground = () => {
    const container = document.getElementById('three-background');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create Stars
    const geometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 3; // Spread within a sphere roughly
        colors[i] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 0.002,
        color: 0xf272c8,
        transparent: true,
        depthWrite: false,
        sizeAttenuation: true
    });

    const stars = new THREE.Points(geometry, material);

    // Initial rotation to match the React component's "rotation={[0, 0, Math.PI / 4]}"
    stars.rotation.z = Math.PI / 4;

    scene.add(stars);

    camera.position.z = 1;

    // Animation Loop
    const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the stars
        // ref.current.rotation.x -= delta / 10;
        // ref.current.rotation.y -= delta / 15;
        // Assuming 60fps, delta is approx 0.016
        stars.rotation.x -= 0.001;
        stars.rotation.y -= 0.0015;

        renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initThreeBackground();
});
