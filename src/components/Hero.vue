<template>
  <div class="w-full h-full absolute top-0 z-0 overflow-hidden">
    <div class="hero z-0 absolute overflow-hidden opacity-40 inset top-0"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  z-index: -1;
  background-color: transparent;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>