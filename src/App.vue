<template>
  <Particles />
  <div class="main w-full h-full relative overflow-hidden bg-app-bg dark:bg-app-bg transition-colors">
    <!-- BG -->
    <Gemini />
    <Hero />
    
    <!-- HOME BUTTON -->
    <!-- <NavBar /> -->

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
import Particles from './components/Particles.vue';
</script>

<style scoped>
</style>
