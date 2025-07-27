<template>
  <div class="w-full h-full flex items-center justify-center">
    <p>{{name}}</p>
  </div>
</template>
<script setup>
defineProps({
  name: String
});
</script>
<style></style>