<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="mx-auto" sm="10">
        <v-card class="pa-5">
          <v-card-title>Add New Skins</v-card-title>
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
                  v-model="skins.name"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="5">
                <select name="Selecte" v-model="skins.hero">
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
            <v-btn type="submit" class="mt-3" color="info" variant="tonal"
              >Add Skins</v-btn
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
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const rules = ref([(value) => !!value || "Required !!!"]);
    const useHeroStore = useHero();
    useHeroStore.getAllHero();
    const skins = ref({
      name: "",
      hero: "",
      image: "",
    });
    const image = ref("");
    return {
      ...storeToRefs(useHeroStore),
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
      formData.append("name", this.skins.name);
      formData.append("hero", this.skins.hero);
      if (this.$refs.form.validate()) {
        const response = await apiSkin.postSkins(formData);
        this.$router.push({
          name: "listskins",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
