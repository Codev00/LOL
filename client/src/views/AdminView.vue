<template>
  <v-app id="inspire" class="v-theme-dark">
    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-item-title> @Admintrations </v-list-item-title>
      </v-list-item>
      <v-card class="mx-auto" max-width="300">
        <v-list density="compact">
          <v-list-subheader>Controller</v-list-subheader>

          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="primary"
            :to="{ path: item.link }"
            link
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { storeToRefs } from "pinia";
import { useStore } from "../stores/useStore";

export default {
  setup() {
    const store = useStore();
    return {
      ...storeToRefs(store),
    };
  },
  data: () => ({
    items: [
      { text: "Heros", icon: "mdi-clock", link: "/admin/hero" },
      { text: "Skins", icon: "mdi-account", link: "/admin/skins" },
    ],
    drawer: null,
  }),
};
</script>

<style scoped>
#search {
  width: 300px;
}
</style>
