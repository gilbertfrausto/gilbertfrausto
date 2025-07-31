<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <!-- HERO -->
     <div class="w-full h-30 opacity-0 animate-fade-in" :style="{ animationDelay: `${3 * DELAY}ms` }"  >
      <div class="hero w-full h-30 rounded-t-lg animate-background-move"></div>
     </div>
    

    <!-- BODY -->
    <div class="w-full">
      <!-- TITLE -->
      <div class="w-full p-4">
        <p 
          class="text-2xl text-black-dull dark:text-white-dull font-lex opacity-0 animate-fade-in"
          :style="{ animationDelay: `${1 * DELAY}ms` }"
        >
          {{name}}
        </p>
        <p 
          class="text-xl text-black-dull/50 dark:text-white-dull/50 font-lex opacity-0 animate-fade-in"
          :style="{ animationDelay: `${2 * DELAY}ms` }"
        >
          {{costume.tags.join(', ')}}
        </p>  
      </div>

      <!-- BODY TEXT -->
      <div class="flex flex-auto overflow-scroll md:flex-row flex-col items-start justify-between">
        <div class="flex flex-col md:w-1/2 w-full p-4">
          <p class="font-kode text-sm text-black-dull dark:text-white-dull opacity-0 animate-fade-in"
            :style="{ animationDelay: `${3 * DELAY}ms` }"
          >
            {{ costume.description }}
          </p>

          <div class="py-4">
            <div class="flex flex-row items-center opacity-0 animate-fade-in" :style="{ animationDelay: `${4 * DELAY}ms` }">
              <h3 class="font-lex text-black dark:text-white">{{ costume.projects.costume_cards.name }}</h3>
              <a class="mx-2" target="_blank" :href="costume.socials[costume.socials.length - 1].link">
                <GvWorld class="text-black-dull dark:text-white-dull text-xl my-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
              </a>
            </div>
            
            <p 
              class="font-kode text-sm text-black-dull dark:text-white-dull opacity-0 animate-fade-in"
              :style="{ animationDelay: `${5 * DELAY}ms` }"
            >
              {{ costume.projects.costume_cards.description }} 
            </p>
            <p class="text-sm text-black/50 dark:text-white/50 font-kode pt-2 opacity-0 animate-fade-in" :style="{ animationDelay: `${6 * DELAY}ms` }">{{costume.projects.costume_cards.stack}}</p>  
          </div>
          
          <div class="py-4">
            <div class="flex flex-row items-center opacity-0 animate-fade-in" :style="{ animationDelay: `${7 * DELAY}ms` }">
              <h3 class="font-lex text-black dark:text-white">{{ costume.projects.platformer_prototype.name }}</h3>
              <a class="mx-2" target="_blank" :href="costume.socials.filter(item => item.name === VIDEO_PLATFORM)[0].link">
                <SiYoutube class="text-black-dull dark:text-white-dull text-xl my-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
              </a>
            </div>
            <p 
              class="font-kode text-sm text-black-dull dark:text-white-dull opacity-0 animate-fade-in"
              :style="{ animationDelay: `${8 * DELAY}ms` }">
              {{costume.projects.platformer_prototype.description}}
            </p>
            <p 
              class="text-sm text-black/50 dark:text-white/50 font-kode pt-2 opacity-0 animate-fade-in" 
              :style="{ animationDelay: `${9 * DELAY}ms` }"
            >{{costume.projects.platformer_prototype.stack}}</p>  
          </div>
           
        </div>

        
        <!-- IMAGES -->
        <div 
          class="flex md:w-1/2 w-full p-4 relative opacity-0 animate-fade-in"
          :style="{ animationDelay: `${9 * DELAY}ms` }"
        >
          <Splide 
            :options="{ type: 'fade', rewind: true, height: 'auto', hasTrack: false, paganiation: false }" 
            aria-label="My Favorite Images"
            @splide:move="onArrowsMounted"
          >
            <SplideSlide v-for="(image, index) in costume.images" :key="index">
              
              <iframe v-if="image.video" :src="image.src" class="rounded-lg w-full h-full" controls></iframe>
              <img v-else :src="image.src" :alt="image.alt" class="rounded-lg w-full" />
            </SplideSlide>

            <!-- Custom buttons -->
            <div class="splide__arrows">
              <button class="splide__arrow splide__arrow--prev">
                <BxRightArrowAlt/>
              </button>
              <button class="splide__arrow splide__arrow--next">
                <BxRightArrowAlt/>
              </button>
            </div>

            <!-- Progress bar -->
            <div class="my-carousel-progress absolute -bottom-3 w-full">
              <div class="my-carousel-progress-bar transition-all bg-black dark:bg-tron" :style="{width: width}"></div>
            </div>
          </Splide>
          
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center">
          <a 
            v-for="(social, index) in costume.socials" 
            class="flex flex-row opacity-0 animate-fade-in"
            target="_blank" 
            :href="social.link" 
            :style="{ animationDelay: `${(index + 10) * DELAY}ms` }">
            <component 
              :is="social.icon"
              v-if="!social.exclude"
              class="text-black-dull dark:text-white-dull text-xl m-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
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
import { PROJECTS_DATA, VIDEO_PLATFORM } from '@/const';
import { SiYoutube, GvWorld, BxRightArrowAlt, BxLeftArrowAlt} from '@kalimahapps/vue-icons';

import { Splide, SplideSlide,  } from '@splidejs/vue-splide';
import { ref } from 'vue';

const {costume} = PROJECTS_DATA;
const startEnd  = costume.images.length + 1;
const startRate = Math.min( 1 / startEnd, 1 );
const width = ref(`${String( 100 * startRate )}%`);
const DELAY = 100;

defineProps({
  name: String,
  closeModal: Function,
});

function onArrowsMounted(splide, index ) {
  const end  = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( index + 1 ) / end, 1 );
  width.value = `${String( 100 * rate )}%`;
}

</script>

<style scoped>
.hero {
  background-image: url(@/assets/images/projects/costume/costume-backdrop.jpg);
  background-size: 110%;
}
</style>