<template>
  <div class="main-page">
    <h1>Hello: {{ id }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useHero } from "../../stores/heroStore";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const heroStore = useHero();
    return {};
  },
};
</script>

<style scoped></style>
