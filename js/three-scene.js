/**
 * GOKULARASAN — 3D AMBIENT DESK & DRAFTING SCENE (Three.js)
 * Clean, lightweight, ambient lighting & drafting coordinate visualizer.
 * Completely removed the robotic hand as requested by the user.
 */

class Engineering3DScene {
  constructor() {
    this.container = document.getElementById('three-canvas-container');
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.ambientGroup = null;

    this.mouseX = 0;
    this.mouseY = 0;
    this.targetRotX = 0;
    this.targetRotY = 0;

    this.init();
  }

  init() {
    try {
      this.scene = new THREE.Scene();

      const width = this.container.clientWidth || window.innerWidth;
      const height = this.container.clientHeight || window.innerHeight;
      this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      this.camera.position.set(0, 0, 20);

      this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.container.appendChild(this.renderer.domElement);

      // Warm Ambient Desk Lighting
      const ambientLight = new THREE.AmbientLight(0xfff7ea, 1.1);
      this.scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
      keyLight.position.set(15, 20, 15);
      this.scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0xaac4e8, 0.5);
      fillLight.position.set(-15, -10, 10);
      this.scene.add(fillLight);

      // Ambient Drafting Coordinate Nodes Group
      this.ambientGroup = new THREE.Group();
      this.scene.add(this.ambientGroup);

      // Subtle Floating Drafting Compass & Coordinate Rings
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xC26B1E,
        metalness: 0.8,
        roughness: 0.3,
        transparent: true,
        opacity: 0.4
      });

      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(8.5, 0.04, 16, 64), ringMat);
      ring1.position.set(0, 0, -5);
      this.ambientGroup.add(ring1);

      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(12.0, 0.03, 16, 64), ringMat);
      ring2.rotation.x = Math.PI / 4;
      ring2.position.set(0, 0, -8);
      this.ambientGroup.add(ring2);

      // Particle Grid
      const particleGeo = new THREE.BufferGeometry();
      const count = 40;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 30;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 10 - 5;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({ color: 0x1A4980, size: 0.12, transparent: true, opacity: 0.35 });
      const points = new THREE.Points(particleGeo, particleMat);
      this.ambientGroup.add(points);

      // Events
      window.addEventListener('resize', () => this.onWindowResize());
      window.addEventListener('mousemove', (e) => this.onMouseMove(e));

      this.animate();
    } catch (e) {
      console.warn("Three.js ambient scene warning:", e);
    }
  }

  onMouseMove(e) {
    this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    this.targetRotY = this.mouseX * 0.15;
    this.targetRotX = -this.mouseY * 0.1;
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.ambientGroup) {
      this.ambientGroup.rotation.y += 0.001;
      this.ambientGroup.rotation.x += (this.targetRotX - this.ambientGroup.rotation.x) * 0.05;
      this.ambientGroup.rotation.y += (this.targetRotY - this.ambientGroup.rotation.y) * 0.05;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
