<template>
  <div class="w-full absolute bottom-0 flex flex-col items-center justify-center p-5">
    <!-- <img class="w-20 drop-shadow-2xl animate-pulse-glow transition-[filter]" src="../assets/images/pose.png"/> -->
    <div class="w-full flex flex-row items-start justify-center relative">
      <a 
        v-for="(link, index) in CONTACT"
        :key="link.name"
        target="_blank"
        :href="link.link"
        class="opacity-0 animate-fade-in"
        :style="{ animationDelay: `${(index + 2) * DELAY}ms` }">
        <component 
          :is="link.icon" 
          v-if="index > 0"
          class="text-black-dull dark:text-white text-2xl m-2 mx-3 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"
        />
      </a>
    </div>
    <div :style="{ animationDelay: `${(1) * DELAY}ms` }" class="opacity-o animate-fade-in">
      <a 
        :href="CONTACT_DATA.website"
        class="text-black dark:text-white font-ave text-xs hover:opacity-60 transition">
        gilbert-frausto.web.app
      </a>
    </div>
    
    <!-- © 2024  -->
  </div>
</template>

<script setup>
import { CONTACT, CONTACT_DATA } from '@/const';
import { ref } from 'vue';

const DELAY = 100;

</script>

<style></style>