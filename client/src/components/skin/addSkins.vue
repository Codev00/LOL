<template>
  <div>
    <select name="Selecte" id="">
      <option v-for="hero in heros" :key="hero._id" :value="hero._id">
        {{ hero.name }}
      </option>
    </select>
  </div>
</template>

<script>
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

<style lang="scss" scoped></style>
