<template>
  <div class="home">
    <Header></Header>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import Header from "../components/home/Header.vue";

// Components

export default defineComponent({
  name: "HomeView",
  components: { Header },
});
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
