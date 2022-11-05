import { defineStore } from "pinia";
import apiSkins from "../services/api.skins";
import { ref } from "vue";
import { useRouter } from "vue-router";
export const useSkins = defineStore("skins", () => {
  const skins = ref([]);
  const oneskin = ref([]);
  async function getAllSkins() {
    try {
      skins.value = await apiSkins.getAllSkins();
    } catch (error) {
      console.log(error);
    }
  }
  async function getSkins(id) {
    try {
      oneskin.value = await apiSkins.getSkins(id);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteSkins(id) {
    try {
      const response = await apiSkins.deleteSkins(id);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    skins,
    oneskin,
    getAllSkins,
    getSkins,
    deleteSkins,
  };
});
