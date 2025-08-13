<template>
  <div 
    :class="{
      'hidden' : !active,
      'flex': active
    }"
    class="w-fll h-full md:flex flex-row items-center md:justify-end justify-center animate-fade-in relative z-30" >
    <nav class="min-h-48 min-w-48 flex flex-col items-center justify-center md:relative absolute">
      <ul class="flex flex-col">
        <li 
          v-for="(link, index) in listItems"
          :key="link.path"
          :style="{ animationDelay: `${index * delay}ms` }"
          :class="[
            ...BUTTON_STYLES,
            active ? 'text-white dark:text-white hover:border-white' : ''
          ]"
          @mouseover="handleMouseOver(index)"
          @mouseout="handleMouseOut(index)"
          @click="setActive(false)">
          <router-link :to="link.path"  v-if="link.name !== 'Home'">
            {{link.displayText}}
        </router-link>
      </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>;
import { ref, onMounted } from 'vue';
import inBetweenTime from 'inbetween-time';
import { storeToRefs } from 'pinia';
import useAppStore from '@/store/app-store';
import { routes } from '@/router';
import { BUTTON_STYLES } from '@/classes/button';
import { ALL_LETTERS } from '@/const';

const delay = 150; // ms
const show = ref(false);

// md:flex hidden

const store = useAppStore();
const {active} = storeToRefs(store);
const {setActive} = store;

const listItems = ref(routes
  .filter(item => item.name !== 'Home')
  .map(item => ({
    name: item.name,
    path: item.path,
    displayText: item.name
  })));

const intervals = {};
const handleMouseOver = (index) => {
  const {name} = listItems.value[index];
  intervals[index] = inBetweenTime({
    timer: 30,
    count: name.length,
    method: () => {
      listItems.value[index].displayText = name
        .split("")
        .map((letter, idx) => {
          if(idx < intervals[index].getIterations()) {
            return name[idx];
          }
          return ALL_LETTERS[Math.floor(Math.random() * 26)]
        })
        .join("");
    },
    onComplete: () => {
      listItems.value[index].displayText = name;
    }
  });
  intervals[index].iterator();
}

const handleMouseOut = (index) => {
  intervals[index].pause();
  if (listItems.value[index]) {
    listItems.value[index].displayText = listItems.value[index].name;
  }
};


onMounted(() => {
  // Trigger show after mount
  show.value = true;
});

</script>

<style>
/* BLUE */
.bg-dialog {
  &:before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: ' ';
    left: 0;
    top: 0;
    z-index: 0;
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%234d4756' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border: 4px solid white;
    z-index: -1;
    opacity: 0.95;
    border-radius: 0.375rem/* 6px */
  }
  .typed {
    font-weight: 700;
		font-size: 1rem;
  }
}

.texture-bg {
  background: linear-gradient(black, black) padding-box, linear-gradient(#fab468, #f46c2c) border-box;
  border: 4px solid transparent;
  .texture-bg-inner {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%234d4756' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: 44%;
  }
}

/* TODO MOVE TO THEME FILE */
.bg {
  &:after {
    content: ' ';
    opacity: 0;
    left: -10px;
    top: 10px;
    z-index: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-size: 100% 100%;
    transform: translate(-3ch, -3mm);
  }
  &:before {
    content: ' ';
    opacity: 0;
    right: -10px;
    top: 10px;
    z-index: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background-size: 100% 100%;
    transform: translate(0ch, -11mm);
    
  }
  &:hover {
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>