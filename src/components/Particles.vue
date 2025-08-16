<template>
  <canvas
    ref="canvas"
    class="w-full h-full absolute top-0 left-0 pointer-events-none z-1 opacity-70"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
let ctx = null;
let animationId = null;
let particles = [];
let spawnTimer = 0;
let maxParticles = 200;
let spawnRate = 100; // milliseconds between spawns

// Reactive theme detection
const isDarkMode = ref(true);

// Function to check theme
function checkTheme() {
  if (typeof window !== "undefined") {
    return (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  return true;
}

// Watch for theme changes
function setupThemeWatcher() {
  if (typeof window === "undefined") return;

  // Initial theme check
  isDarkMode.value = checkTheme();

  // Watch for class changes on document element
  const observer = new MutationObserver(() => {
    isDarkMode.value = checkTheme();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Watch for system theme changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => {
    isDarkMode.value = checkTheme();
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    observer.disconnect();
    mediaQuery.removeEventListener("change", handleChange);
  };
}

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
    this.age = Math.random() * 1000;
    this.active = false;
  }

  reset() {
    this.x = Math.random() * this.canvasWidth;
    this.y = this.canvasHeight + Math.random() * 50; // Start just below viewport
    this.targetX = Math.random() * this.canvasWidth;
    this.baseSize = Math.random() * 3 + 1; // Particles (1-4px)
    this.speed = 0.5 + Math.random() * 0.5; // Simpler speed
    this.pulseSpeed = 0.05 + Math.random() * 0.05; // Faster pulsing for visibility
    this.pulseOffset = Math.random() * Math.PI * 2;
    this.opacity = 0.5 + Math.random() * 0.4;
  }

  update(deltaTime) {
    this.age += deltaTime * 0.01; // Faster age increment for visible pulsing

    // Move upward
    this.y -= this.speed;

    // Slight horizontal drift
    const dx = this.targetX - this.x;
    this.x += dx * 0.001;

    // Reset when off screen
    if (this.y < -100) {
      this.reset();
    }
  }

  draw(ctx, isDark) {
    if (!this.active) return;

    // Enhanced pulsing scale - more visible animation
    const pulseScale =
      0.6 + Math.sin(this.age * this.pulseSpeed + this.pulseOffset) * 0.4;
    const size = this.baseSize * pulseScale;

    // Pulsing opacity with different frequency
    const pulseOpacity =
      0.7 + Math.sin(this.age * 0.8 + this.pulseOffset) * 0.3;

    ctx.save();

    // Theme-based colors
    const color = isDark ? "255, 255, 255" : "0, 0, 0";

    // Draw glow effect first (smaller, more subtle)
    ctx.globalAlpha = this.opacity * pulseOpacity * 0.4;
    const glowGradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      size * 2
    );
    glowGradient.addColorStop(0, `rgba(${color}, 0.6)`);
    glowGradient.addColorStop(0.5, `rgba(${color}, 0.2)`);
    glowGradient.addColorStop(1, `rgba(${color}, 0)`);

    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, size * 2, 0, Math.PI * 2);
    ctx.fill();

    // Draw main particle with gradient
    ctx.globalAlpha = this.opacity * pulseOpacity;
    const mainGradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      size
    );
    mainGradient.addColorStop(0, `rgba(${color}, 1)`);
    mainGradient.addColorStop(0.7, `rgba(${color}, 0.6)`);
    mainGradient.addColorStop(1, `rgba(${color}, 0)`);

    ctx.fillStyle = mainGradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

let lastTime = 0;

function animate(currentTime) {
  const deltaTime = currentTime - lastTime;
  lastTime = currentTime;

  if (!ctx || !canvas.value) return;

  // Gradual spawning
  spawnTimer += deltaTime;
  if (spawnTimer >= spawnRate) {
    const inactiveParticle = particles.find((p) => !p.active);
    if (inactiveParticle) {
      inactiveParticle.active = true;
      inactiveParticle.reset();
      spawnTimer = 0;
    }
  }

  // Clear canvas
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  // Update and draw particles
  particles.forEach((particle) => {
    if (particle.active) {
      particle.update(deltaTime);
      particle.draw(ctx, isDarkMode.value);
    }
  });

  animationId = requestAnimationFrame(animate);
}

function resizeCanvas() {
  if (!canvas.value) return;

  const rect = canvas.value.getBoundingClientRect();
  canvas.value.width = rect.width;
  canvas.value.height = rect.height;

  // Update particle canvas dimensions
  particles.forEach((particle) => {
    particle.canvasWidth = canvas.value.width;
    particle.canvasHeight = canvas.value.height;
  });
}

function initParticles() {
  particles = [];
  spawnTimer = 0;

  if (!canvas.value) return;

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle(canvas.value.width, canvas.value.height));
  }
}

let cleanupThemeWatcher = null;

onMounted(() => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d");

  resizeCanvas();
  initParticles();

  // Setup theme watcher
  cleanupThemeWatcher = setupThemeWatcher();

  // Handle window resize
  window.addEventListener("resize", resizeCanvas);

  // Start animation
  requestAnimationFrame(animate);
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  if (cleanupThemeWatcher) {
    cleanupThemeWatcher();
  }
  window.removeEventListener("resize", resizeCanvas);
});
</script>

<style scoped>
canvas {
  mask-image: radial-gradient(
    white 0%,
    white 30%,
    transparent 80%,
    transparent
  );
}
</style>
