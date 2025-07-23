<template>
  <div  class="w-full h-full flex items-center justify-center absolute top-0">
    <!-- <img class="lg:w-1/3 w-1/2 animate-float translate-y-3 drop-shadow-md " src="../assets/images/home.png" /> -->
    <img class="lg:w-1/3 w-1/2 animate-float translate-y-3 drop-shadow-md opacity-40" src="../assets/images/Gemini2.png" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
