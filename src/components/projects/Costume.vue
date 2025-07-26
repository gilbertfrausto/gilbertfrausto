<template>
  <div class="w-full h-full flex flex-col items-center justify-center">
    <!-- HERO -->
    <div class="hero w-full h-30"></div>

    <!-- BODY -->
    <div class="w-full p-3">
      <!-- TITLE -->
      <div>
        <p class="text-2xl text-white-dull font-lex">
          Costume
        </p>
        <p class="text-xl text-white-dull/50 font-lex">Web3, 2D Platformer, Unity</p>  
      </div>

      <div class="py-4">
        <p class="font-kode text-sm">Costume is a playful IP with a ton of progress and a couple different prototypes, manga and many other concepts.</p>
      </div>

      <!-- LINKS -->
      <div class="flex flex-row">
        <div v-for="social in SOCIALS" class="flex flex-row ">
          <a class="" target="_blank" :href="social.link">
            <component :is="social.icon" class="text-xl m-2 cursor-pointer"/>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script setup>
import { SiOpensea, SiInstagram, SiDiscord, FaBandsXTwitter } from '@kalimahapps/vue-icons';

const SOCIALS = [
  {
    name: 'IG',
    link: 'https://www.instagram.com/costumestudios',
    icon: SiInstagram,
  },
  {
    name: 'Opensea',
    link: 'https://opensea.io/collection/costumebattlecards',
    icon: SiDiscord,
  },
  {
    name: 'Opensea',
    link: 'https://discord.gg/Deyzj2dNKK',
    icon: SiOpensea,
  },
  {
    name: 'X',
    link: 'https://twitter.com/costumestudios',
    icon: FaBandsXTwitter,
  },
]

</script>

<style scoped>
.hero {
  background-image: url(@/assets/images/projects/costume-backdrop.jpg);
  background-size: cover;
}
</style>