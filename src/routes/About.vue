<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <router-link to="/">
      <BxArrowBack class="text-4xl m-4 opacity-100 delay-100 hover:opacity-5 transition animate-fade-in cursor-pointer "/>
    </router-link>  

    <div 
      class="about"
      :class="[
        'opacity-0 w-[70%] flex flex-col flex-wrap bg-black-dull/70 rounded-xl border',
        ' border-white shadow-2xl p-5 relative animate-fade-in',
        setActive && 'active'
      ]"
    >
      <p class="text-white-dull font-lex text-md w-full">{{ ABOUT_DATA.description }}</p>
      <h3 class="text-white font-lex text-md w-ful py-3">{{ ABOUT_DATA.langs_and_framewoks }}</h3>
      <p class="font-kode text-white-dull w-full text-sm py-3">{{ ABOUT_DATA.skills.join(',') }}</p>
      <h3 class="text-white font-lex text-md w-full py-3">{{ ABOUT_DATA.ai }}</h3>
      <p class="font-kode text-white-dull w-full text-sm py-3">{{ ABOUT_DATA.ai_tools.join(',') }}</p>
    </div>
  </div>
  
</template>
<script setup>
import { BxArrowBack } from '@kalimahapps/vue-icons';
import { ABOUT_DATA } from '@/const';
import { ref } from 'vue';

const setActive = ref(false);

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
    /* z-index: -1; */
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
    /* z-index: 0; */
    width: 100%;
    height: 100%;
    /* border-top: white;
    border-right: white;
    border-width: 1px; */
    z-index: -1;
    /* background-color: #00000000; */
    /* background: linear-gradient(rgba(255, 255, 255, 0.284), rgba(0, 0, 0, 0)) padding-box, linear-gradient(#ffffff00, #00000000) border-box; */
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