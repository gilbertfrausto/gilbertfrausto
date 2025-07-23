<template>
  <div ref="sceneContainer" class="w-full h-full absolute top-0"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    const container = this.$refs.sceneContainer;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create grid plane
    const gridGeometry = new THREE.PlaneGeometry(200, 200, 20, 20);
    const gridMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5 });
    const grid = new THREE.LineSegments(
      new THREE.WireframeGeometry(gridGeometry),
      gridMaterial
    );
    grid.rotation.x = -Math.PI / 2;
    scene.add(grid);

    // Create wireframe mountains
    const mountainGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const mountainDepth = 100;
    const mountainHeight = 20;
    for (let x = -100; x <= 100; x += 5) {
      const height = Math.sin(x * 0.1) * mountainHeight + (Math.random() - 0.5) * 5;
      vertices.push(x, 0, -mountainDepth);
      vertices.push(x, height, -mountainDepth);
    }
    mountainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const mountainMaterial = new THREE.LineBasicMaterial({ color: 0xffa500 });
    const mountains = new THREE.LineSegments(mountainGeometry, mountainMaterial);
    scene.add(mountains);

    // Add central line
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -mountainDepth),
      new THREE.Vector3(0, 0, 0)
    ]);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff4500 });
    const centerLine = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(centerLine);

    // Camera position and angle
    camera.position.set(0, 20, 20);
    camera.lookAt(0, 0, -mountainDepth);
    camera.rotation.x = -Math.PI / 6;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      grid.position.z += 0.1;
      if (grid.position.z > 10) grid.position.z = 0;
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }
};
</script>

<style scoped>
.sceneContainer {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>