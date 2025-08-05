<template>
  <div class="flex md:w-[40%] w-[60%] h-[20%] items-center justify-center z-0 flex flex-wrap">
    <p 
      v-for="(text, index) in HOME_DATA" 
      :style="{ animationDelay: `${(index + 5) * DELAY}ms` }"
      class="font-red-hat opacity-0 animate-fade-in text-gray-950 dark:text-white md:text-4xl text-xl font-bold flex-wrap text-center"
      >
      <span :class="[
        text.colored && 'welcome-text gradient-text',
        // 'text-shadow-sm dark:text-shadow-none',
      ]" 
      class="px-1"
      >
        {{ text.text }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { HOME_DATA } from '@/const';
const DELAY = 100;
</script>

<style>
.gradient-text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
