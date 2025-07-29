<template>
  <div class="main w-full h-full relative overflow-hidden bg-app-bg dark:bg-app-bg">
    <!-- BG -->
    <Gemini />
    <Hero />
    
    <!-- HOME BUTTON -->
    <NavBar />

    <!-- VIEWS -->
    <main class="w-full h-full relative">
      <RouterView />
    </main>

    <Footer />  
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Gemini from '@/components/Gemini.vue';
</script>

<style scoped>
/* .main {
  background-image: radial-gradient(at 50% 100%, #393964 0, #000 100%);
  &.dark {
    background-image: linear-gradient(0deg, #accbee 0, #e7f0fd);
  }
} */
</style>
