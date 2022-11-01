import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("store", () => {
  //   ref = state
  // computed = getters
  // function = actions
  function onCompare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }
  return {
    onCompare,
  };
});
