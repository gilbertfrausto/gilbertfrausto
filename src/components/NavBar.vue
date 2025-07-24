<template>
  <div class="container absolute">
    <nav class="flex items-center justify-between w-full relative z-10">
      <div>
        <router-link to="/" class="text-white font-prompt p-2 cursor-pointer text-xl hover:opacity-50">Υς.ΔΙΘ</router-link>
      </div>
      <!-- <ul class="flex flex-row">
        <li v-for="link in navs" 
        class='text-white font-prompt p-2 cursor-pointer hover:o
        pacity-35 transition-all text-xl'>{{link}}</li>
      </ul>
    -->
    </nav>
  </div>
</template>

<script setup>
const navs = ['Projects', 'Contact', 'About'];
</script>

<style></style>