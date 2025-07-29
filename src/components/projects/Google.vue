<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <!-- HERO -->
    <div class="w-full h-30 opacity-0 animate-fade-in" :style="{ animationDelay: `${1 * DELAY}ms` }">
      <div class="hero w-full h-30 rounded-t-lg"></div>
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
            {{google.tags.join(', ')}}
        </p>  
      </div>

      <!-- BODY TEXT -->
      <div class="flex flex-auto overflow-scroll md:flex-row flex-col items-start justify-between">
        <div class="flex flex-col w-full p-4">
          <div class="pb-4">
            <div class="flex flex-row items-center py-2 opacity-0 animate-fade-in" :style="{ animationDelay: `${2 * DELAY}ms` }">
              <h3 class="font-lex text-black dark:text-white">{{ google.projects.glue.name }}</h3>
            </div>

            <p 
              class="font-kode text-sm text-black-dull dark:text-white-dull opacity-0 animate-fade-in" 
              :style="{ animationDelay: `${3 * DELAY}ms` }"
            >
              {{ google.projects.glue.description }} 
            </p>
            <p 
              class="text-sm text-black/50 dark:text-white/50 font-kode pt-2 opacity-0 animate-fade-in" 
              :style="{ animationDelay: `${4 * DELAY}ms` }"
            >
              {{google.projects.glue.stack}}
            </p>  
          </div>
          <div class="py-4">
            <div class="flex flex-row items-center opacity-0 animate-fade-in" :style="{ animationDelay: `${5 * DELAY}ms` }">
              <h3 class="font-lex text-black py-2 dark:text-white">{{ google.projects.presubmit.name }}</h3>
            </div>

            <p 
              class="font-kode text-sm text-black-dull dark:text-white-dull opacity-0 animate-fade-in" 
              :style="{ animationDelay: `${6 * DELAY}ms` }"
            >
              {{ google.projects.presubmit.description }} 
            </p>
            <p 
              class="text-sm text-black/50 dark:text-white/50 font-kode pt-2 opacity-0 animate-fade-in" 
              :style="{ animationDelay: `${7 * DELAY}ms` }"
            >
              {{google.projects.presubmit.stack}}
            </p>  
          </div>
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center">
          <a 
            v-for="(social, index) in SOCIALS"
            class="flex flex-row opacity-0 animate-fade-in" 
            target="_blank" 
            :href="social.link"
            :style="{ animationDelay: `${(index + 8)* DELAY}ms` }">
            <component :is="social.icon" class="text-black-dull dark:text-white-dull text-xl m-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
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
import { SiOpensea, SiInstagram, SiDiscord, SiYoutube, FaBandsXTwitter, GvWorld, BxRightArrowAlt, BxLeftArrowAlt} from '@kalimahapps/vue-icons';

import { Splide, SplideSlide,  } from '@splidejs/vue-splide';
import { ref } from 'vue';

const {pz, google} = PROJECTS_DATA;
const startEnd  = pz.images.length + 1;
const startRate = Math.min( 1 / startEnd, 1 );
const width = ref(`${String( 100 * startRate )}%`);
const DELAY = 100; // Delay in milliseconds

defineProps({
  name: String,
  closeModal: Function,
});


// ADD TO CONST File, LOOK INTO ADD THE THE ICONS HERE
const SOCIALS = [
  {
    name: 'Website',
    link: google.socials.website,
    icon: GvWorld,
  },
]


function onArrowsMounted(splide, index ) {
  const end  = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( index + 1 ) / end, 1 );
  width.value = `${String( 100 * rate )}%`;
}

</script>

<style scoped>
.hero {
  background-image: url(@/assets/images/projects/google/google-banner.jpg);
  background-size: contain;
}
</style>