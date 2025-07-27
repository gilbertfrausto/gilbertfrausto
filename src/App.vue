<template>
  <!-- HOME BUTTON -->
  <NavBar />

  <!-- VIEWS -->
  <main class="w-full h-full">
    <RouterView />
  </main>

  <!-- BG -->
  <Gemini class="-z-[1]"/>
  <Hero />

  <Footer />  
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Gemini from '@/components/Gemini.vue';
</script>

<style scoped>
</style>
