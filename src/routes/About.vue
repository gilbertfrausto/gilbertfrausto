<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <router-link to="/">
      <BxArrowBack class="text-black-dull dark:text-white-dull text-4xl m-4 opacity-100 delay-100 hover:opacity-5 transition animate-fade-in cursor-pointer "/>
    </router-link>  

    <div 
      class="about"
      :class="[
        'opacity-0 w-[70%] flex flex-col flex-wrap bg-white-dull/70 dark:bg-black/70 rounded-xl animate-fade-in',
        ' shadow-2xl p-5 relative',
        '',
        setActive && 'active'
      ]"
    >
      <p 
        class="text-black-dull dark:text-white-dull font-lex text-md w-full opacity-0 animate-fade-in" 
        :style="{ animationDelay: `${1 * DELAY}ms` }"
      >
        {{ ABOUT_DATA.description }}
      </p>
      <h3 
        class="text-black dark:text-white font-lex text-md w-full py-3 opacity-0 animate-fade-in"
        :style="{ animationDelay: `${2 * DELAY}ms` }"
      >
        {{ ABOUT_DATA.langs_and_framewoks }}
      </h3>
      <p 
        class="font-kode text-black-dull dark:text-white-dull w-full text-sm py-3 break-all whitespace-normal opacity-0 animate-fade-in"
        :style="{ animationDelay: `${3 * DELAY}ms` }"
      >
        {{ ABOUT_DATA.skills.join(', ') }}
      </p>
      <h3 
        class="text-black dark:text-white font-lex text-md w-full py-3 opacity-0 animate-fade-in"
        :style="{ animationDelay: `${4 * DELAY}ms` }"
      >
        {{ ABOUT_DATA.ai }}
      </h3>
      <p 
        class="font-kode text-black-dull dark:text-white-dull w-full text-sm py-3 opacity-0 animate-fade-in"
        :style="{ animationDelay: `${5 * DELAY}ms` }"
      >
        {{ ABOUT_DATA.ai_tools.join(', ') }}
      </p>
      <div class=" border-t border-black-dull/50 dark:border-white-dull/50 w-full px-2 my-3"></div>
      <div class="flex flex-row items-center justify-center opacity-0 animate-fade-in py-3" :style="{ animationDelay: `${6 * DELAY}ms` }">
        <p class="text-black dark:text-white font-lex text-md opacity-0 animate-fade-in">Resume</p>
        <a :href="ABOUT_DATA.resume_url" target="_blank">
          <BsFileEarmarkPersonFill
            class="text-black-dull dark:text-white text-2xl m-2 cursor-pointer hover:scale-150 hover:opacity-60 transition-all"
          />
        </a>
      </div>
    
    </div>
  </div>
  
</template>
<script setup>
import { BxArrowBack, BsFileEarmarkPersonFill } from '@kalimahapps/vue-icons';
import { ABOUT_DATA } from '@/const';
import { ref } from 'vue';

const setActive = ref(false);
const DELAY = 100;

setTimeout(() => {
  setActive.value = true;
}, 500);

</script>

<style>
.about {
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