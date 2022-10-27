<template>
  <v-app id="inspire">
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
            :to="item.link"
            link
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-list-item-content>
        <v-text-field
          v-model="searchTerm"
          placeholder="Search"
          @input="searchFruits"
        ></v-text-field>
      </v-list-item-content>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  setup() {},
  data: () => ({
    items: [
      { text: "Heros", icon: "mdi-clock", link: "/admin/hero/listhero" },
      { text: "Skins", icon: "mdi-account", link: "/admin/skins" },
      { text: "Conversions", icon: "mdi-flag", link: "/" },
    ],
    drawer: null,
  }),
};
</script>
