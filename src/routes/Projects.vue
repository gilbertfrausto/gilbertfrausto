<template>
  <div class="w-full h-full flex flex-col items-center justify-center ">
    <router-link to="/">
      <BxArrowBack class="text-4xl m-3 opacity-0 delay-300 hover:opacity-5 transition animate-fade-in cursor-pointer "/>
    </router-link>

    <div class="flex flex-col flex-wrap">
      <div 
        v-for="item in all" 
        class="flex flex-row relative"
      >
        <div v-for="project in item"
          @click="openModal(project.name)"
          :class="[
            'lg:w-30 lg:h-30 w-20 h-20  bg-transparent m-2 border-transparent rounded-2xl relative',
            'cursor-pointer transition-all duration-300 opacity-0 animate-fade-in',
            'bg-contain bg-no-repeat',
            'after:rounded-2xl',
            project.name === BLANK ? 'bg-transparent hidden lg:flex' : 'tile bg-black hover:shadow-2xl hover:scale-110 hover:border-tron'
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
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
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
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="w-full text-lg font-medium leading-6 text-white flex justify-end"
              >
                <button
                  type="button"
                  :class="[...BUTTON_STYLES]"
                  @click="closeModal"
                >
                 <ClCloseLg />
                </button>
              </DialogTitle>
              
              <!-- PROJECT COMPONENTS -->
              <Costume v-if="project === PROJECTS.COSTUME" />
              <Google v-else-if="project === PROJECTS.GOOGLE"/>
              <Bb v-else-if="project === PROJECTS.BB"/>
              <Pz v-else-if="project === PROJECTS.PZ"/>

              <div v-else>no project</div>

              <!-- BUTTONS
              <div class="mt-4">
                <button
                  type="button"
                  :class="[...BUTTON_STYLES]"
                  @click="closeModal"
                >
                 <ClCloseLg />
                </button>
              </div> 
              -->
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
import { ClCloseLg } from '@kalimahapps/vue-icons';
import { ref } from 'vue';
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
import Pz from '@/components/projects/Pz..vue';
import Backdrop from '@/components/Backdrop.vue';
import { BUTTON_STYLES } from '@/classes/button';
import useAppStore from '@/store/app-store';


const BLANK = 'blank';
const DELAY = 150;

const store = useAppStore();
const {active, project} = storeToRefs(store);
const {setActive, setProject} = store;

const PROJECTS = {
  COSTUME: 'Costume',
  PZ: 'Prizoners',
  GOOGLE: 'Google',
  BB: 'BattleBlocks'
};

const all = {
  projects: [
    {
      name: PROJECTS.COSTUME,
      img: 'src/assets/images/projects/costume.jpg',
      project_index: 1
    },
    {
      name: PROJECTS.PZ,
      img: 'src/assets/images/projects/pz-logo.png',
      project_index: 2
    },
    {
      name: BLANK
    }
  ],
  projects_row_2: [
    {
      name: BLANK
    },
    {
      name: PROJECTS.GOOGLE,
      img: 'src/assets/images/projects/google.jpg',
      project_index: 3
    },
    {
      name: PROJECTS.BB,
      img: 'src/assets/images/projects/bb.png',
      project_index: 4
    },

  ]
}


function closeModal() {
  setActive(false);
}
function openModal(name) {
  setProject(name);
  setActive(true);
  console.log('called open modal', name)
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
    border: 2px solid white;
    background-color: transparent;
    transition: all .5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  &:hover {
    &:after {
      opacity: 1;
      z-index: 10;
      /* box-shadow: 10px 7px 41px 0px rgba(87,209,187,0.58); */
    }
    
  }
}
</style>