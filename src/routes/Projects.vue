<template>
  <div class="w-full h-full flex items-center justify-center ">
    <ul class="flex items-center justify-center flex-wrap">
      <li v-for="(project, index) in projects" 
        :class="[
          'lg:w-30 lg:h-30 w-20 h-20 bg-black m-2 cursor-pointer border border-white hover:shadow-2xl transition-all',
        ]">
        <div ></div>
      </li>
    </ul>
    
  </div>
</template>
<script setup>
const projects = [
  'Costume',
  'Prizoners',
  'Spark5D',
  'Battleblocks'
]
</script>
<style></style>