<template>
  <v-container>
    <v-row>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2">
          <v-row justify="center">
            <h1>
              {{ hero.name }}
            </h1>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2 main">
          <v-row class="avatar" justify="center">
            <img
              height="250"
              width="200"
              :src="`/${hero.avatar}`"
              alt="Yasuo"
            />
          </v-row>
          <v-row class="name">
            <v-col sm="2">
              <h3><strong>Name: </strong></h3>
            </v-col>
            <v-col sm="10">
              <h3>{{ hero.name }}</h3>
            </v-col>
          </v-row>
          <v-row class="title">
            <v-col sm="2">
              <h3><strong>Title: </strong></h3>
            </v-col>
            <v-col sm="10">
              <h3>{{ hero.title }}</h3>
            </v-col>
          </v-row>
          <v-row class="category">
            <v-col sm="2">
              <h3><strong>Category: </strong></h3>
            </v-col>
            <v-col sm="10">
              <h3>{{ hero.category }}</h3>
            </v-col>
          </v-row>
          <v-row class="level">
            <v-col sm="2">
              <h3><strong>Level: </strong></h3>
            </v-col>
            <v-col sm="10">
              <h3>{{ hero.level }}</h3>
            </v-col>
          </v-row>
          <v-row class="content">
            <v-col sm="2">
              <h3><strong>Content: </strong></h3>
            </v-col>
            <v-col sm="10">
              <h3>{{ hero.content }}</h3>
            </v-col>
          </v-row>
          <v-row class="skins">
            <v-col sm="2">
              <h3><strong>Skins: </strong></h3>
            </v-col>
            <v-col sm="10">
              <h3>{{ hero.skins }}</h3>
            </v-col>
          </v-row>
          <v-row class="options" justify="center">
            <v-btn
              color="success"
              variant="tonal"
              @click="
                this.$router.push({
                  name: 'edithero',
                  params: { id: hero._id },
                })
              "
              >Edit</v-btn
            >
            <v-btn color="red" variant="tonal" @click="removeHero(hero._id)"
              >Delete</v-btn
            >
          </v-row>
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
      hero: {},
    };
  },
  async created() {
    const res = await apiHero.getHero(this.$route.params.id);
    this.hero = res;
  },
  methods: {
    async removeHero(id) {
      const response = await apiHero.deleteHero(id);
      this.$router.push({
        name: "listhero",
        params: { message: response.message },
      });
    },
  },
};
</script>
<style scoped>
.avatar {
  margin-bottom: 35px;
}
.options {
  margin: 20px 0;
}
.options .v-btn {
  margin: 0 5px;
}
</style>
