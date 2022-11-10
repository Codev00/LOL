import { defineStore } from "pinia";
import apiHero from "../services/api.hero";
import { ref } from "vue";
export const useHero = defineStore("hero", () => {
  const heros = ref([]);
  const hero = ref([]);
  async function getAllHero() {
    try {
      heros.value = await apiHero.getAllHero();
      console.log(heros.value);
    } catch (error) {
      console.log(error);
    }
  }
  async function getHero(id) {
    try {
      hero.value = await apiHero.getHero(id);
      console.log(hero.value);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    heros,
    hero,
    getAllHero,
    getHero,
  };
});
