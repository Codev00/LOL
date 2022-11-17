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
import { useUser } from "../stores/userStore";

// Components

export default defineComponent({
  name: "HomeView",
  components: { Header },
  setup() {},
});
</script>

<style scoped>
.home {
  height: 100%;
}
</style>
