<template>
  <div class="flex md:w-[40%] w-[60%] h-[20%] items-center justify-center z-0 flex-wrap animate-shake" :style="{ animationDelay: `${DELAY}ms` }">
    <p 
      v-for="(text, index) in home_data" 
      :style="{ animationDelay: `${(index + 5) * DELAY}ms` }"
      class="font-red-hat opacity-0 animate-fade-in text-gray-950 dark:text-white md:text-4xl text-xl font-bold flex-wrap text-center"
      >
      <span :class="[
        text.colored && 'welcome-text gradient-text'
      ]" 
      class="px-1"
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

const DELAY = 100;
const home_data = ref(HOME_DATA);

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
