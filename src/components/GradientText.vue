<template>
  <div class="flex md:w-[40%] w-[60%] h-[20%] items-center justify-center z-0 flex-wrap animate-shake" :style="{ animationDelay: `${DELAY}ms` }">
    <p 
      v-for="(text, index) in home_data" 
      :style="{ animationDelay: `${(index + 5) * DELAY}ms` }"
      class="font-red-hat opacity-0 animate-fade-in text-gray-950 dark:text-white md:text-4xl text-xl font-bold flex-wrap text-center"
      >
      <span :class="[
        text.colored && 'welcome-text gradient-text',
        active && 'opacity-15'
      ]" 
      class="px-1 transition-opacity"
      @load="updateText({index, text})"
      @compositionupdate="updateText()"
      @animationend="updateText()"
      >
        {{ text.text }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { ALL_LETTERS, HOME_DATA } from '@/const';
import inBetweenTime from 'inbetween-time';
import { onMounted, onUpdated, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useAppStore from '@/store/app-store';

const DELAY = 100;
const home_data = ref(HOME_DATA);

const store = useAppStore();
const {active} = storeToRefs(store);

onMounted(() => {
  //TOOD capture the the animation end event then fire this method
  setTimeout(() => updateText(), (HOME_DATA.length + 3) * 100);
})

const updateText = () => {
  home_data.value.forEach((data, index) => {
    if (data.colored) {
      const {text} = home_data.value[index];
      const {iterator, getIterations} = inBetweenTime({
        count: text.length - 1,
        timer: 50,
        method: () => {
          const done = text
            .split('')
            .map((letter, index) => {
              if(index < getIterations()) {
                return text[index];
              }
              return ALL_LETTERS[Math.floor(Math.random() * ALL_LETTERS.length -1 )]
            })
            .join('');
          home_data.value[index].text = done;
        }, 
        onComplete: () => {
          home_data.value[index].text = text;
        }
      })
      iterator();
    }    
  });
}
</script>

<style>
.gradient-text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>


<!-- SAVE
<div class="flex flex-row">
  <div class="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
  <div class="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
</div> -->