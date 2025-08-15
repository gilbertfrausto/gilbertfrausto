<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <!-- HERO -->
    <div class="w-full h-30 opacity-0 animate-fade-in" :style="{ animationDelay: `${1 * DELAY}ms` }">
      <div class="npm-hero w-full h-30 rounded-t-lg"></div>
    </div>

    <!-- BODY -->
    <div class="w-full">
      <!-- TITLE -->
      <div class="w-full p-4">
        <p class="text-2xl text-black-dull dark:text-white-dull font-lex opacity-0 animate-fade-in" :style="{ animationDelay: `${1 * DELAY}ms` }">
          {{name}}
        </p>
        <p 
          class="text-xl text-black-dull/50 dark:text-white-dull/50 font-lex opacity-0 animate-fade-in"
          :style="{ animationDelay: `${2 * DELAY}ms` }"
        >
          {{inbetweenTime.tags.join(', ')}}
        </p>  
      </div>

      <!-- BODY TEXT -->
      <div class="flex flex-auto overflow-scroll md:flex-row flex-col items-start justify-between">
        <div class="flex flex-col w-full p-4">
          <div class="pb-4">
            <div class="flex flex-row items-center opacity-0 animate-fade-in" :style="{ animationDelay: `${3 * DELAY}ms` }">
              <h3 class="font-lex text-black dark:text-white">{{ inbetweenTime.projects.npm.name }}</h3>
              <a class="mx-2" target="_blank" :href="inbetweenTime.socials[0].link">
                <AkNpmFill class="text-black-dull dark:text-white-dull text-xl my-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
              </a>
            </div>

            <p class="font-kode text-sm text-black-dull dark:text-white-dull opacity-0 animate-fade-in" :style="{ animationDelay: `${4 * DELAY}ms` }">
              {{ inbetweenTime.projects.npm.description }} 
            </p>
            <p 
              class="text-sm text-black/50 dark:text-white/50 font-kode pt-2 opacity-0 animate-fade-in"
              :style="{ animationDelay: `${5 * DELAY}ms` }"
            >
              {{inbetweenTime.projects.npm.stack}}
            </p>  
          </div>
           <div class="pb-4">
            <div class="flex flex-row items-center opacity-0 animate-fade-in" :style="{ animationDelay: `${3 * DELAY}ms` }">
              <h3 class="font-lex text-black dark:text-white">{{ inbetweenTime.projects.ps.name }}</h3>
              <a class="mx-2" target="_blank" :href="inbetweenTime.socials[1].link">
                <AkNpmFill class="text-black-dull dark:text-white-dull text-xl my-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
              </a>
            </div>

            <p class="font-kode text-sm text-black-dull dark:text-white-dull opacity-0 animate-fade-in" :style="{ animationDelay: `${4 * DELAY}ms` }">
              {{ inbetweenTime.projects.ps.description }} 
            </p>
            <p 
              class="text-sm text-black/50 dark:text-white/50 font-kode pt-2 opacity-0 animate-fade-in"
              :style="{ animationDelay: `${5 * DELAY}ms` }"
            >
              {{inbetweenTime.projects.ps.stack}}
            </p>  
          </div>
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center">
          <a 
            v-for="(social, index) in inbetweenTime.socials" 
            class="flex flex-row opacity-0 animate-fade-in"
            target="_blank" 
            :href="social.link" 
            :style="{ animationDelay: `${(index + 5)* DELAY}ms` }"
          >
            <component 
              :is="social.icon" 
              v-if="!social?.exclude" 
              class="text-black-dull dark:text-white-dull text-xl m-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"
            />
          </a>
        </div>
        
        <div class="flex">
          <a @click="closeModal()" to="/">
            <BxLeftArrowAlt class="text-black-dull dark:text-white-dull text-2xl m-2 cursor-pointer hover:scale-150 transition-all"/>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script setup>
import { PROJECTS_DATA } from '@/const';
import { AkNpmFill, BxLeftArrowAlt} from '@kalimahapps/vue-icons';

import { ref } from 'vue';


const {inbetweenTime} = PROJECTS_DATA;
const DELAY = 100; // Delay in milliseconds

defineProps({
  name: String,
  closeModal: Function,
});
</script>

<style scoped></style>