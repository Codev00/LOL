<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="mx-auto" sm="10">
        <v-card class="pa-5">
          <v-card-title>Edit Skins</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  label="Skins Name"
                  variant="underlined"
                  :rules="rules"
                  v-model="oneskin.name"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="5">
                <select name="Selecte" v-model="oneskin.hero">
                  <option
                    v-for="hero in heros"
                    :key="hero._id"
                    :value="hero._id"
                  >
                    {{ hero.name }}
                  </option>
                </select>
              </v-col>
            </v-row>
            <v-file-input
              label="Skins"
              variant="underlined"
              @change="selectFile"
              ref="file"
              :rules="rules"
            ></v-file-input>
            <v-img :src="`/${oneskin.image}`" width="150"></v-img>
            <v-btn type="submit" class="mt-3" color="info" variant="tonal"
              >Update Skins</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useHero } from "../../stores/heroStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import apiSkin from "../../services/api.skins";
import { useRouter, useRoute } from "vue-router";
import { useSkins } from "../../stores/skinStore";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const rules = ref([(value) => !!value || "Required !!!"]);
    const useHeroStore = useHero();
    const useSkinStore = useSkins();
    useHeroStore.getAllHero();
    useSkinStore.getSkins(route.params.id);
    const skins = ref({
      name: "",
      hero: "",
      image: "",
    });
    const image = ref("");
    return {
      ...storeToRefs(useHeroStore),
      ...storeToRefs(useSkinStore),
      skins,
    };
  },
  methods: {
    selectFile(file) {
      this.image = this.$refs.file.files[0];
      console.log(this.image);
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("skins", this.image);
      formData.append("name", this.oneskin.name);
      formData.append("hero", this.oneskin.hero);
      console.log(formData);
      if (this.$refs.form.validate()) {
        const response = await apiSkin.updateSkins(
          this.$route.params.id,
          formData
        );
        this.$router.push({
          name: "listskins",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>
