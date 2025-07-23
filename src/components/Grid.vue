<template>
  <div ref="container" class="w-full h-full absolute top-0 z-0" ></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as THREE from 'three'

const container = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 5, 10)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000) // Synthwave dark background
  container.value.appendChild(renderer.domElement)

  // 🌌 Starfield
  const starsGeometry = new THREE.BufferGeometry()
  const starCount = 1000
  const starVertices = []

  for (let i = 0; i < starCount; i++) {
    const x = THREE.MathUtils.randFloatSpread(600)
    const y = THREE.MathUtils.randFloatSpread(600)
    const z = THREE.MathUtils.randFloatSpread(600)
    starVertices.push(x, y, z)
  }

  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.2,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.6,
  })

  const starField = new THREE.Points(starsGeometry, starsMaterial)
  scene.add(starField)

  // 🧿 Grid
  const gridHelper = new THREE.GridHelper(200, 200, 0xff00cc, 0x00ffff)
  gridHelper.material.transparent = true
  gridHelper.material.opacity = 0.6
  scene.add(gridHelper)

  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.5 })
  const gridLines = new THREE.Group()

  const size = 100
  const divisions = 50

  for (let i = -size; i <= size; i += size / divisions) {
    const geometry1 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(i, 0, -size),
      new THREE.Vector3(i, 0, size),
    ])
    const geometry2 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-size, 0, i),
      new THREE.Vector3(size, 0, i),
    ])
    gridLines.add(new THREE.Line(geometry1, lineMaterial))
    gridLines.add(new THREE.Line(geometry2, lineMaterial))
  }

  scene.add(gridLines)

  // 🎞️ Animate
  const animate = () => {
    requestAnimationFrame(animate)

    gridLines.position.z += 0.1
    if (gridLines.position.z > size / divisions) {
      gridLines.position.z = 0
    }

    starField.rotation.y += 0.0005 // slow galaxy drift

    renderer.render(scene, camera)
  }

  animate()

  // 📐 Resize support
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
})
</script>

<style scoped>
div {
  overflow: hidden;
}
</style>
