<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
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
  background: url(/Background.jpg) no-repeat center center fixed;
}
</style>
