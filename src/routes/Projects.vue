<template>
  <div class="w-full h-full flex flex-col items-center justify-center ">
    <router-link to="/">
      <BxArrowBack class="text-black-dull dark:text-white-dull text-4xl m-3 opacity-0 delay-300 hover:opacity-5 transition animate-fade-in cursor-pointer "/>
    </router-link>

    <div class="flex flex-col flex-wrap">
      <div 
        v-for="item in ALL_PROJECT_TILES" 
        class="flex flex-row relative"
      >
        <div v-for="project in item"
          @click="openModal(project.name)"
          :class="[
            'lg:w-30 lg:h-30 w-20 h-20  bg-transparent m-2  rounded-2xl relative',
            'cursor-pointer transition-all duration-300 opacity-0 animate-fade-in',
            'bg-contain bg-no-repeat',
            'after:rounded-2xl after:transition-all',
            project.name === PROJECTS.BLANK ? 'bg-transparent hidden lg:flex' : 'tile bg-black hover:shadow-2xl hover:scale-110'
          ]"
          :style="{ 
            backgroundImage: `url(${project.img})`,
            animationDelay: `${project.project_index * DELAY}ms`
          }"
        >
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL -->
  <TransitionRoot appear :show="active" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :class="[
                'w-10/12 h-10/12 md:w-2/3 relative transform rounded-lg bg-white dark:bg-black/60 text-left align-middle shadow-xl', 
                'border-2 border-black dark:border-white animate-border-pulse dark:animate-border-pulse-dark',
                'transition-all modal-border-efx',
                modalAnimation ? 'active' : 'inactive'
              ]"
            >

              <!-- PROJECT COMPONENTS -->
              <Costume v-if="project === PROJECTS.COSTUME" :name="project" :closeModal="closeModal"/>
              <Google v-else-if="project === PROJECTS.GOOGLE" :name="project"  :closeModal="closeModal"/>
              <Bb v-else-if="project === PROJECTS.BB" :name="project"  :closeModal="closeModal"/>
              <Moodys v-else-if="project === PROJECTS.MOODYS" :name="project"  :closeModal="closeModal"/>
              <ForestRoad v-else-if="project === PROJECTS.FOREST_ROAD" :name="project"  :closeModal="closeModal"/>
              <Pz v-else-if="project === PROJECTS.PZ" :name="project" :closeModal="closeModal"/>

              <div v-else>no project</div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <Backdrop />
</template>

<script setup>
import { BxArrowBack } from '@kalimahapps/vue-icons';
import { storeToRefs } from 'pinia';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import Costume from '@/components/projects/Costume.vue';
import Google from '@/components/projects/Google.vue';
import Bb from '@/components/projects/Bb.vue';
import Pz from '@/components/projects/Pz.vue';
import Backdrop from '@/components/Backdrop.vue';
import { ICON_BUTTON_STYLES } from '@/classes/button';
import useAppStore from '@/store/app-store';

import { PROJECTS, ALL_PROJECT_TILES } from '@/const';

// Default theme
import '@splidejs/vue-splide/css';

// or only core styles
import '@splidejs/vue-splide/css/core';
import Moodys from '@/components/projects/Moodys.vue';
import ForestRoad from '@/components/projects/ForestRoad.vue';

const DELAY = 150;

const store = useAppStore();
const {active, project, modalAnimation} = storeToRefs(store);
const {setActive, setProject, setModalAnimation} = store;

// MOVE TO CONSTANTS FILE


function closeModal() {
  setModalAnimation(false)
  setActive(false);
}
function openModal(name) {
  setProject(name);
  setActive(true);
  setTimeout(() => setModalAnimation(true), 100);
}
</script>

<style scoped>
.tile {
  &:after {
    content: '';
    position: absolute;
    width: 102%;
    height: 102%;
    top: 0;
    opacity: 0;
    border: 4px solid var(--color-tron);
    background-color: transparent;
    /* transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
  }
  &:hover {
    &:after {
      opacity: 1;
      z-index: 10;
      /* box-shadow: 10px 7px 41px 0px rgba(87,209,187,0.58); */
    }
  }
}


.modal-border-efx {
  /* background-image: radial-gradient(circle at 22% 28%, #8C52FF 0%, #001B85 69%, #000000 99%); */
  /* border: 2px solid white; */
    &:before {
      content: ' ';
      opacity: 0;
      top: -10px;
      right: -30px;
      z-index: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
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
    z-index: 0;
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