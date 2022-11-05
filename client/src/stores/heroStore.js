import { defineStore } from "pinia";
import apiHero from "../services/api.hero";
import { ref } from "vue";
export const useHero = defineStore("hero", () => {
  const heros = ref([]);
  async function getAllHero() {
    try {
      heros.value = await apiHero.getAllHero();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    heros,
    getAllHero,
  };
});
