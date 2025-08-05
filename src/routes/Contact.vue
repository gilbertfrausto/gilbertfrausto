<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <router-link to="/" class="p-2 z-10">
      <BxArrowBack class="text-black-dull dark:text-white-dull text-shadow-2xl  text-4xl m-4 opacity-100 delay-100 hover:opacity-5 transition animate-fade-in cursor-pointer "/>
    </router-link>  

    <div 
      class="about" 
      :class="[
        'opacity-0 md:w-[50%] w-3/4 flex flex-col flex-wrap bg-white/70 dark:bg-black/70 rounded-xl',
        'shadow-md p-5 relative animate-fade-in',
        setActive && 'active'
      ]"
      :style="{ animationDelay: `${1 * DELAY}ms` }"
    >
      <div class="flex flex-col items-center justify-center">
        <h3 
          class="text-black-dull dark:text-white font-lex text-md w-full py-3"
          :style="{ animationDelay: `${1 * DELAY}ms` }"
        >
          {{CONTACT_DATA.description}}
        </h3>
        <div class="w-full flex flex-col items-center justify-center relative">
          <div class=" border-t border-black-dull/50 dark:border-white-dull/50 w-full px-2 my-3"></div>
        </div>
        
        <div class="w-full flex flex-row items-start justify-center relative">
          <a 
            v-for="(link, index) in CONTACT"
            :key="link.name"
            target="_blank"
            :href="link.link"
            class="opacity-0 animate-fade-in" 
            :style="{ animationDelay: `${(index + 2) * DELAY}ms` }">
            <component :is="link.icon" class="text-black-dull dark:text-white text-2xl m-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"/>
          </a>
        </div>
      </div>
    </div>

  </div>
  
</template>
<script setup>
import { BxArrowBack } from '@kalimahapps/vue-icons';
import { CONTACT, CONTACT_DATA } from '@/const';
import { ref } from 'vue';

const setActive = ref(false);
const DELAY = 100;

setTimeout(() => {
  setActive.value = true;
}, 500);

</script>

<style>
.contact {
    &:before {
    content: ' ';
    opacity: 0;
    top: -10px;
    right: -30px;
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(../assets/images/border-lg-rounded-right.png);
    background-size: 100% 100%;
    transform: translate(0ch, -11mm);
    animation-delay: 1s;
    pointer-events: none;
  }

  &:after {
    content: ' ';
    opacity: 0;
    left: -30px;
    bottom: -30px;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-image: url(../assets/images/border-lg-rounded-left.png);
    background-size: 100% 100%;
    transform: translate(-3ch, -3mm);
    animation-delay: 1s;
    pointer-events: none;
  }

  &.active {
    &:after {
      opacity: 1;
      transform: translate(0, 0);
      transition: all 0.5s cubic-bezier(.44,.32,.13,.75);
    }
     &:before {
      opacity: 1;
      transform: translate(0ch, -5mm);
      transition: all 0.5s cubic-bezier(.44,.32,.13,.75);
    }
  }
}
</style>