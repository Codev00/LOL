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
      <v-col sm="auto" class="pa-3" v-for="skin in skins" :key="skin._id">
        <v-card
          class="pa-1"
          :to="{ name: 'detailskins', params: { id: skin._id } }"
        >
          <img
            height="110"
            width="220"
            :src="`/${skin.image}`"
            alt="`{{skin.name}}`"
          />
          <v-card-title class="headline">
            {{ skin.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useSkins } from "../../stores/skinStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const useSkinStore = useSkins();
    useSkinStore.getAllSkins();
    console.log(useSkinStore.skins);
    return {
      ...storeToRefs(useSkinStore),
    };
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
