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
        <p class="text-xl text-white-dull/50 font-lex">{{moodys.tags.join(', ')}}</p>  
      </div>

      <!-- BODY TEXT -->
      <div class="flex flex-auto overflow-scroll md:flex-row flex-col items-start justify-between">
        <div class="flex flex-col w-full p-4">
          <div class="pb-4">
            <div class="flex flex-row items-center">
              <h3 class="font-lex text-white">{{ moodys.projects.riskcalc.name }}</h3>
              <!-- <a class="mx-2" target="_blank" :href="google.socials.website">
                <GvWorld class="text-xl my-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
              </a> -->
            </div>

            <p class="font-kode text-sm  text-white-dull">
              {{ moodys.projects.riskcalc.description }} 
            </p>
            <p class="text-sm text-white/50 font-kode pt-2">{{moodys.projects.riskcalc.stack}}</p>  
          </div>
        </div>
      </div>

      <!-- LINKS -->
      <div class="flex flex-row items-center justify-between p-4">
        <div class="flex flex-row items-center">
          <a v-for="social in SOCIALS" class="flex flex-row " target="_blank" :href="social.link">
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
import { SiOpensea, SiInstagram, SiDiscord, SiYoutube, FaBandsXTwitter, GvWorld, BxRightArrowAlt, BxLeftArrowAlt} from '@kalimahapps/vue-icons';

import { Splide, SplideSlide,  } from '@splidejs/vue-splide';
import { ref } from 'vue';

const {moodys, google} = PROJECTS_DATA;
const startEnd  = google.images.length + 1;
const startRate = Math.min( 1 / startEnd, 1 );
const width = ref(`${String( 100 * startRate )}%`);

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
  background-image: url(@/assets/images/projects/moodys/moody_bd.webp);
  /* background-repeat: no-repeat; */
  background-size: contain;
}
</style>