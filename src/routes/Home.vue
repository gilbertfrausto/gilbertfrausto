<template>
  <div class="w-full h-full overflow-hidden relative">
    <MenuButton class="md:hidden flex" />
    <CenterNav />
    <Backdrop />
  </div>
</template>

<script setup>
import Backdrop from '@/components/Backdrop.vue';
import CenterNav from '@/components/CenterNav.vue';
import MenuButton from '@/components/MenuButton.vue';
</script>

<style scoped>
</style>
