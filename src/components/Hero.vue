<template>
  <div class="bg-white/30 dark:bg-black/40 w-full h-full absolute top-0 -z-[1] overflow-hidden">
    <div class="hero -z-[1] absolute overflow-hidden opacity-40 inset top-0"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  /* position: absolute; */
  /* inset: -30% 0 -60%; */
  inset: -82% 0 -100%;
  /* overflow: hidden; */
  /* width: 100%; */
  z-index: -1;
  /* opacity: .4; */
  transition: opacity 1s ease;
  /* background: url('./assets/noise.png'), radial-gradient(circle at right center, #563277, #23212a 30%, #07090a 55%, #32517380); */
  /* -webkit-mask-image: radial-gradient(ellipse 300% 30% at center center, #000 20%, #00000080 50%, #0000); */
  /* mask-image: radial-gradient(ellipse 300% 30% at center center, #000 20%, #00000080 50%, #0000); */
  /* background-image: url('./assets/noise.png'), linear-gradient(to right top, rgb(255, 0, 145), rgb(237, 41, 174), rgb(211, 67, 200), rgb(176, 87, 221), rgb(131, 103, 236), rgb(98, 125, 248), rgb(59, 143, 254), rgb(0, 159, 255), rgb(0, 186, 255), rgb(0, 211, 255), rgb(0, 234, 255), rgb(0, 255, 252)); */
  background: linear-gradient(315deg, #29c566, #6629c5, #c56629);
  background-size: 200% 200%;
  animation: gradient-animation 15s ease infinite;
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