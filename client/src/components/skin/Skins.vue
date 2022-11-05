<template>
  <v-container>
    <v-row justify="space-evenly">
      <v-col sm="auto" class="pa-3">
        <v-card class="pa-1" justify="center">
          <img
            height="450"
            width="800"
            :src="`/${oneskin.image}`"
            alt="`{{oneskin.name}}`"
          />
          <v-card-title class="headline">
            {{ oneskin.name }}
          </v-card-title>
          <v-row class="options" justify="center">
            <v-btn
              color="success"
              variant="tonal"
              @click="
                this.$router.push({
                  name: 'editskins',
                  params: { id: oneskin._id },
                })
              "
              >Edit</v-btn
            >
            <v-btn color="red" variant="tonal" @click="removeSkin(oneskin._id)"
              >Delete</v-btn
            >
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useSkins } from "../../stores/skinStore";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const useSkinStore = useSkins();
    useSkinStore.getSkins(route.params.id);
    const removeSkin = (id) => {
      useSkinStore.deleteSkins(id);
      useRouter().push({
        name: "listskins",
        params: { message: response.message },
      });
    };
    return {
      ...storeToRefs(useSkinStore),
      removeSkin,
    };
  },
};
</script>

<style scoped>
.v-card-title {
  text-align: center;
  align-items: center;
}
.options {
  margin: 20px 0;
}
.options .v-btn {
  margin: 0 5px;
}
</style>
