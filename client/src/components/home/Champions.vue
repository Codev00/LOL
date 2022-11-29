<template>
  <div class="main-page">
    <div class="container home-main">
      <h1>Champions</h1>
      <div class="search">
        <i class="fa-solid fa-magnifying-glass icon"></i>
        <input
          type="text"
          placeholder="Search"
          v-model="search"
          autocomplete="off"
        />
      </div>
      <div class="card-list row">
        <div class="card-item d-flex" v-for="hero in plusOne" :key="hero._id">
          <div class="card-v" @click="detailChampion(hero._id, hero.name)">
            <img :src="`/${hero.avatar}`" alt="" />
            <div class="title">
              <h3>{{ hero.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useHero } from "../../stores/heroStore";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { computed } from "vue";
import apiHero from "../../services/api.hero";

export default {
  setup() {
    const router = useRouter();
    const heroStore = useHero();
    const search = ref("");
    const champions = ref([]);
    const get = async () => {
      champions.value = await apiHero.getAllHero();
    };
    get();
    const detailChampion = (id, name) => {
      router.push({
        name: "detailChampion",
        params: { name: name },
        query: { id: id },
      });
    };
    return {
      ...storeToRefs(heroStore),
      detailChampion,
      search,
      champions,
    };
  },
  computed: {
    plusOne() {
      if (!this.search) return this.champions;
      return this.champions.filter((hero) =>
        hero.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.home-main {
  height: calc(100% - 90px);
  opacity: 0.9;
  background-color: rgb(19, 19, 19);
  width: 100%;
  overflow-y: scroll;
  /* padding: 15px 20px; */
}
.home-main::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.home-main h1 {
  width: 100%;
  margin: 0 auto;
  color: azure;
  text-align: center;
  font-style: italic;
}
/* Search */
.search {
  display: flex;
  height: 50px;
  width: 40%;
  border-bottom: 1px solid yellow;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 3em;
  margin-top: 3em;
}
.search i {
  color: rgb(180, 180, 180);
  font-size: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.search .icon {
  min-width: 50px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.search input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: none;
  color: rgb(180, 180, 180);
  border-radius: 6px;
  font-size: 17px;
  font-weight: 500;
}
/* Card */
.card-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
}
.card-item {
  position: relative;
  margin: 20px 10px;
  width: calc(20% - 20px);
  padding: 0 0;
  height: 300px;
  cursor: pointer;
}
.card-item .card-v {
  width: 100%;
  height: 100%;
}
.card-item img {
  width: 100%;
  height: 100%;
}
.card-item .title {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  text-align: center;
  padding: 5px 10px;
  color: rgb(77, 211, 211);
  font-style: italic;
  border-radius: 0px;
  background-color: rgba(27, 27, 27, 0.9);
  transition: height 0.3s ease-out;
  height: 0;
  opacity: 0;
  overflow: hidden;
}
.card-item:hover .title {
  height: 52px;
  opacity: 1;
}
.card-item:hover {
  /* border: 1px solid wheat; */

  box-shadow: 5px 5px 5px rgb(58, 56, 56);
}
</style>
