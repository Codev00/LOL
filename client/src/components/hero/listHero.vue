<template>
  <v-container>
    <div v-for="hero in heros" :key="hero._id">
      <img
        height="250"
        width="200"
        :src="`/avatar/${hero.avatar}`"
        alt="Yasuo"
      />
      <h1>{{ hero.name }}</h1>
    </div>
  </v-container>
</template>

<script>
import apiHero from "../../services/api.hero";
export default {
  data() {
    return {
      heros: [],
    };
  },
  async created() {
    this.heros = await apiHero.getAllHero();
  },
};
</script>

<style></style>
