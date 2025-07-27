<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <!-- HERO -->
    <div class="hero w-full h-30 rounded-t-lg"></div>

    <!-- BODY -->
    <div class="w-full">
      <!-- TITLE -->
      <div class="w-full p-4">
        <p class="text-2xl text-white-dull font-lex">
          {{name}}
        </p>
        <p class="text-xl text-white-dull/50 font-lex">{{costume.tags.join(', ')}}</p>  
      </div>

      <!-- BODY TEXT -->
      <div class="flex  md:flex-row flex-col items-start justify-between">
        <div class="flex flex-col w-1/2 p-4">
          <p class="font-kode text-sm text-white-dull">
            {{ costume.description }}
          </p>
          <p class="font-kode text-sm py-4 text-white-dull">
            {{ costume.costume_cards }}
          </p>
          <a class="" target="_blank" :href="'https://costumestudios.io'">
            <GvWorld class="text-xl m-2 cursor-pointer hover:scale-150 transition-all"/>
          </a>
        </div>
        
        <!-- IMAGES -->
        <div class="flex w-1/2 p-4 relative">
          <Splide 
            :options="{ type: 'fade', rewind: true, height: 'auto', hasTrack: false, paganiation: false }" 
            aria-label="My Favorite Images"
            @splide:move="onArrowsMounted"
          >
            <SplideSlide v-for="(image, index) in costume.images" :key="index">
              <img :src="image.src" :alt="image.alt" class="rounded-lg w-full" />
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
              <div class="my-carousel-progress-bar transition-all" :style="{width: width}"></div>
            </div>
          </Splide>
          
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-row p-4">
        <div v-for="social in SOCIALS" class="flex flex-row ">
          <a class="" target="_blank" :href="social.link">
            <component :is="social.icon" class="text-xl m-2 cursor-pointer hover:scale-150 transition-all"/>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script setup>
import { PROJECTS_DATA } from '@/const';
import { SiOpensea, SiInstagram, SiDiscord, FaBandsXTwitter, GvWorld, BxRightArrowAlt} from '@kalimahapps/vue-icons';

import { Splide, SplideSlide,  } from '@splidejs/vue-splide';
import { ref } from 'vue';

const {costume} = PROJECTS_DATA;
const startEnd  = costume.images.length + 1;
const startRate = Math.min( 1 / startEnd, 1 );
const width = ref(`${String( 100 * startRate )}%`);

defineProps({
  name: String
});

const SOCIALS = [
  {
    name: 'IG',
    link: costume.socials.instagram,
    icon: SiInstagram,
  },
  {
    name: 'Discord',
    link: costume.socials.discord,
    icon: SiDiscord,
  },
  {
    name: 'Opensea',
    link: costume.socials.opensea,
    icon: SiOpensea,
  },
  {
    name: 'X',
    link: costume.socials.twitter,
    icon: FaBandsXTwitter,
  },
]

function onArrowsMounted(splide, index ) {
  const end  = splide.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( index + 1 ) / end, 1 );
  width.value = `${String( 100 * rate )}%`;
}

</script>

<style>
.hero {
  background-image: url(@/assets/images/projects/costume-backdrop.jpg);
  background-size: cover;
}

.my-carousel-progress {
  background: #ccc;
}

.my-carousel-progress-bar {
  background: var(--color-tron);
  height: 4px;
  transition: width 400ms ease;
  width: 0;
}

.splide__track {
  overflow: visible !important;
}
</style>