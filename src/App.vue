<template>
  <Particles />
  <div class="main w-full h-full relative overflow-hidden bg-app-bg dark:bg-app-bg transition-colors">
    <!-- BG -->
    <Gemini />
    <Hero />

    <!-- VIEWS -->
    <main class="w-full h-full relative">
      <RouterView />
    </main>

    <Footer v-if="isHome" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Hero from '@/components/Hero.vue';
import Footer from '@/components/Footer.vue';
import Gemini from '@/components/Gemini.vue';
import Particles from './components/Particles.vue';

const route = useRoute();

// TODO add to const file
const isHome = computed(() => route.path === '/');
</script>

<style scoped>
</style>
