<template>
  <div class="inline-block cursor-pointer absolute right-5 top-5 z-40" @click="toggleMenu">
    <div 
      :class="{ 
        'transform translate-y-[8px] -rotate-45 bg-white dark:bg-white': active,
        'bg-black dark:bg-white': !active
      }"
      class="w-[35px] h-[3px] bg-black dark:bg-white my-[6px] origin-center transition-all duration-400"
    ></div>
    <div 
      :class="{ 'opacity-0': active }"
      class="w-[35px] h-[3px] bg-black dark:bg-white my-[6px] transition-all duration-400"
    ></div>
    <div 
      :class="{ 
        '-translate-y-[8px] rotate-45 bg-white dark:bg-white': active,
        'bg-black dark:bg-white': !active
        }"
      class="w-[35px] h-[3px] my-[6px] origin-center transition-all duration-400"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { storeToRefs } from 'pinia';
import useAppStore from '@/store/app-store';

const store = useAppStore();
const {active} = storeToRefs(store);
const {setActive} = store;

function toggleMenu() {
  setActive(!active.value)
}

</script>

<style scoped>
</style>