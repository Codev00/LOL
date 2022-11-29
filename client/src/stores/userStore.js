import { defineStore } from "pinia";
import { ref } from "vue";
import apiuser from "../services/api.user";

export const useUser = defineStore("user", () => {
  const user = ref([]);
  const login = ref(false);
  async function account() {
    user.value = await apiuser.account();
    console.log(user.value);
  }

  return { user, login, account };
});
