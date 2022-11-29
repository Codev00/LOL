<script>
import { storeToRefs } from "pinia";
import { onMounted, onUpdated, ref } from "vue";
import { useRoute } from "vue-router";
import { useHero } from "../../stores/heroStore";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import "@splidejs/splide/css/skyblue";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const route = useRoute();
    const id = route.query.id;
    const heroStore = useHero();

    const getChampion = async () => {
      await heroStore.getHero(id);
    };
    getChampion();
    onUpdated(() => {
      getChampion();
    });
    const options = {
      tyep: "loop",
      perMove: 1,
      padding: "14%",
      autoheight: true,
      autowidth: true,
      rewind: true,
      speed: 1000,
      rewindSpeed: 1000,
      autoplay: true,
      trimSpace: true,
    };
    return {
      ...storeToRefs(heroStore),
      id,
      options,
    };
  },
};
</script>

<template>
  <div class="champion-page">
    <div class="champions">
      <div class="heading-page">
        <div class="background">
          <img :src="`/${hero.skins[0].image}`" alt="Image" />
          <div class="text-box">
            <div class="head">
              <p>
                <span class="title">{{ hero.title }}</span>
              </p>
              <h3>
                <span class="name">{{ hero.name }}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="body-page">
        <div class="info">
          <h2>Thông Tin Tướng</h2>
        </div>
        <div class="detail">
          <div class="row">
            <div class="col-sm-2 item">
              <h4>Vai Trò</h4>
              <p>{{ hero.category }}</p>
            </div>
            <div class="col-sm-2 item">
              <h4>Độ Khó</h4>
              <p>{{ hero.level }}</p>
            </div>
            <div class="col-sm-8 item">
              <h4>Truyện</h4>
              <p>{{ hero.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="body-page">
        <div class="info">
          <h2>Trang Phục</h2>
        </div>
        <div class="SkinList splide">
          <Splide
            class="SkinItem"
            :options="options"
            aria-label="My Favorite Images"
          >
            <SplideSlide v-for="skin in hero.skins" :key="skin._id">
              <img :src="`/${skin.image}`" :alt="skin.name" />
              <h3>{{ skin.name }}</h3>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.champions {
  height: calc(100% - 90px);
  opacity: 0.9;
  background-color: rgb(19, 19, 19);
  width: 100%;
  overflow-y: scroll;
  color: azure;
}
.champions::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}

/* Heading-page */
.heading-page {
  position: relative;
  color: azure;
}
.heading-page .background {
  display: flex;

  z-index: 0;
}
.heading-page .background img {
  position: relative;
  width: 100%;
  height: auto;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.heading-page .background .text-box {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: rgba(19, 19, 19, 0.55);
  margin: 0 200px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.heading-page .background .text-box .head {
  text-align: center;
}
.head .title {
  color: #fff;
  font-style: italic;
  font-weight: 660;
  font-size: 30px;
}
.head .name {
  color: #fff;
  font-style: italic;
  font-weight: 700;
  font-size: 60px;
}
/* Body Page */
.body-page {
  margin: 50px 100px;
  background-color: rgb(31, 27, 27);
  padding: 20px 10px;
  border-radius: 10px;
}
.body-page .info {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 20px;
  padding-left: 50px;
  width: 41%;
  border-bottom: 5px solid red;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 7px;
  font-weight: 500;
  font-style: italic;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.SkinList img {
  width: 800px;
  height: 530px;
  margin-top: 20px;
  border-radius: 10px;
}
.SkinList .SkinItem {
  position: relative;
}
.SkinList .SkinItem h3 {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-weight: 600;
  font-size: 30px;
  width: 800px;
  margin: 0 0;
  background-color: rgba(19, 19, 19, 0.55);
  padding: 20px 0;
}

.body-page .detail {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
}
.body-page .detail .item {
  padding: 10px 10px;
}
.body-page .detail h4 {
  border-bottom: 1px solid red;
  padding: 10px 0;
}
</style>
