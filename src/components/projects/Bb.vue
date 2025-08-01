<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <!-- HERO -->
    <div class="hero w-full h-30 rounded-t-lg animate-background-move"></div>

    <!-- BODY -->
    <div class="w-full">
      <!-- TITLE -->
      <div class="w-full p-4">
        <p class="text-2xl text-white-dull font-lex">
          {{name}}
        </p>
        <p class="text-xl text-white-dull/50 font-lex">{{bb.tags.join(', ')}}</p>  
      </div>

      <!-- BODY TEXT -->
      <div class="flex flex-auto overflow-scroll md:flex-row flex-col items-start justify-between">
        <div class="flex flex-col md:w-1/2 w-full px-4">
          <div class="">
            <div class="flex flex-row items-center">
              <h3 class="font-lex text-white">{{ pz.projects.nft_game.name }}</h3>
              <a class="mx-2" target="_blank" :href="pz.socials.website">
                <GvWorld class="text-xl my-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
              </a>
            </div>

            <p class="font-kode text-sm  text-white-dull">
              {{ pz.projects.nft_game.description }} 
            </p>
            <p class="text-sm text-white/50 font-kode pt-2">{{pz.projects.nft_game.stack}}</p>  
          </div>
        </div>

        
        <!-- IMAGES -->
        <div class="flex md:w-1/2 w-full p-4 relative">
          <Splide 
            :options="{ type: 'fade', rewind: true, height: 'auto', hasTrack: false, paganiation: false }" 
            aria-label="My Favorite Images"
            @splide:move="onArrowsMounted"
          >
            <SplideSlide v-for="(image, index) in bb.images" :key="index">
              
              <iframe v-if="image.video" :src="image.src" class="rounded-lg w-full h-full" controls></iframe>
              <img v-else :src="image.src" :alt="image.alt" class="rounded-lg w-full" />
            </SplideSlide>

            <!-- Custom buttons -->
            <div class="splide__arrows">
              <button class="splide__arrow splide__arrow--prev">
                <BxRightArrowAlt/>
              </button>
              <button class="splide__arrow splide__arrow--next">
              <BxRightArrowAlt />
              </button>
            </div>

            <!-- Progress bar -->
            <div class="my-carousel-progress absolute -bottom-3 w-full">
              <div class="my-carousel-progress-bar transition-all" :style="{width: width}"></div>
            </div>
          </Splide>
          
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center">
          <a v-for="social in bb.socials" class="flex flex-row " target="_blank" :href="social.link">
            <component :is="social.icon" class="text-xl m-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
          </a>
        </div>
        
        <div class="flex">
          <a @click="closeModal()" to="/">
            <BxLeftArrowAlt class="text-2xl m-2 cursor-pointer hover:scale-150 transition-all"/>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script setup>
import { PROJECTS_DATA } from '@/const';
import { GvWorld, BxRightArrowAlt, BxLeftArrowAlt} from '@kalimahapps/vue-icons';

import { Splide, SplideSlide,  } from '@splidejs/vue-splide';
import { ref } from 'vue';

const {pz, bb} = PROJECTS_DATA;
const startEnd  = bb.images.length + 1;
const startRate = Math.min( 1 / startEnd, 1 );
const width = ref(`${String( 100 * startRate )}%`);

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
  background-image: url(@/assets/images/projects/bb/bb_backdrop.png);
  background-size: cover;
}
</style>