<template>
  <div  class="w-full h-full flex items-center justify-center absolute top-0">
     <div v-if="allRoutes.Projects === path" class="w-full h-full flex items-center opacity-0 justify-center animate-fade-in">
      <img 
        class="lg:w-1/3 w-1/2 animate-float translate-y-3 drop-shadow-md blur-xs" 
        src="../assets/images/contact.png"
      />
    </div>
    <div v-if="allRoutes.Contact === path" class="w-full h-full flex items-center opacity-0 justify-center animate-fade-in">
      <img 
        class="lg:w-1/3 w-1/2 animate-float translate-y-3 drop-shadow-md blur-xs" 
        src="../assets/images/about.png" 
      />
    </div>
    <div v-if="allRoutes.About === path" class="w-full h-full flex items-center opacity-0 justify-center animate-fade-in">
      <img 
        class="lg:w-1/3 w-1/2 animate-float translate-y-3 drop-shadow-md blur-xs" 
        src="../assets/images/home.png" 
      />
    </div>
    <div v-else-if="allRoutes.Home === path" class="w-full h-full flex items-center justify-center opacity-0 animate-fade-in">
      <img 
        class="lg:w-1/4 w-1/2 animate-float translate-y-3 drop-shadow-md" src="../assets/images/Gemini2.png" 
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import useAppStore from '@/store/app-store';
import { routes } from '@/router';

const store = useAppStore();
const {porject} = storeToRefs(store);

const route = useRoute();
const path = computed(() => route.path);

const allRoutes = routes.reduce((all, item) => {
  all[item.name] = item.path;
  return all;
}, {});
console.log(allRoutes);;
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.gemini {
  /* background-image: url('@/assets/images/tile.png'); */
  /* opacity: 0.4; */
}
</style>
