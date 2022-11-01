<template>
  <v-container>
    <v-alert
      type="success"
      variant="outlined"
      v-if="this.$route.params.message"
      close-text="Close Alert"
    >
      {{ this.$route.params.message }}
    </v-alert>
    <v-row class="header">
      <v-col>
        <v-card-text>
          <v-text-field
            :loading="loading"
            density="compact"
            variant="solo"
            label="Search Heros"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
            id="search"
          ></v-text-field>
        </v-card-text>
      </v-col>
      <v-col>
        <div>
          <v-btn
            color="info"
            variant="tonal"
            @click="this.$router.push({ name: 'addskins' })"
            >Add</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col sm="auto" class="pa-3" v-for="hero in heros" :key="hero._id">
        <v-card
          class="pa-1"
          :to="{ name: 'detail', params: { id: hero._id, name: hero.name } }"
        >
          <img
            height="250"
            width="200"
            :src="`/${hero.avatar}`"
            alt="`{{hero.name}}`"
          />
          <v-card-title class="headline">
            {{ hero.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import apiHero from "../../services/api.hero";

export default {
  data() {
    return {
      heros: [],
      loading: false,
      loaded: false,
    };
  },
  async created() {
    this.heros = await apiHero.getAllHero();
  },
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.v-card-title {
  text-align: center;
  align-items: center;
}
.header {
  text-align: left;
  align-items: center;
}
.header .v-card-text {
  width: 100%;
}
</style>
