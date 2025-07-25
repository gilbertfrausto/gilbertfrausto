import { defineStore } from 'pinia';
import { ref } from 'vue';

const useAppStore = defineStore('app', {
  state: () => {
    return {
      active: ref(false),
      project: undefined
    }
  },
  actions: {
    setActive(active) {
      this.active = active;
    },
    setProject(project) {
      this.project = project;
    }
  }

});

export default useAppStore;