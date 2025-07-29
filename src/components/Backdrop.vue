<template>
  <div tabindex="-1" class="h-full w-full z-[9] flex  flex-col items-center justify-center fixed left-0"
    :class="{
      'top-[100%] opacity-0': !active,
      'top-0 opacity-100': active
    }">
    <div
      class="h-full w-1/2 bg-black-dull/90 absolute transition-[var(--stagger)]"
      :class="{
        'left-[-100%] opacity-0': !active,
        'left-0 opacity-80': active
      }"
    >
    </div>
    <div
      class="h-full w-[50.01%] bg-black-dull/90 absolute transition-[var(--stagger)]"
      :class="{
        'right-[-100%] opacity-0': !active,
        'right-0 opacity-80': active
      }"
      >
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useAppStore from '@/store/app-store';

const store = useAppStore();
const {active} = storeToRefs(store);
</script>

<style></style>