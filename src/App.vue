<template>
  <!-- HOME BUTTON -->
  <NavBar />

  <!-- VIEWS -->
  <main class="w-full h-full">
    <RouterView />
  </main>

  <!-- BG -->
  <Greetings msg="Vite + Vue" class="-z-[1]"/>
  <Hero />


  <Footer />  
</template>

<script setup>
import Greetings from './components/Greetings.vue';
import Hero from './components/Hero.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
</style>
