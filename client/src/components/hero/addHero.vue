<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Hero</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="Name"
                  variant="underlined"
                  v-model="hero.name"
                  :rules="rules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  label="Title"
                  variant="underlined"
                  v-model="hero.title"
                  :rules="rules"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-select
                  v-model="hero.category"
                  label="Category"
                  :items="listCategory"
                  variant="underlined"
                  :rules="rules"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="hero.level"
                  label="Level"
                  :items="listLevel"
                  variant="underlined"
                  :rules="rules"
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="hero.country"
                  label="Country"
                  :items="listCountry"
                  variant="underlined"
                  :rules="rules"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="12">
                <v-textarea
                  label="Content"
                  variant="underlined"
                  rows="1"
                  v-model="hero.content"
                  :rules="rules"
                ></v-textarea
              ></v-col>
            </v-row>

            <v-file-input
              label="Avatar"
              variant="underlined"
              @change="selectFile"
              multiple
              ref="file"
              :rules="rules"
            ></v-file-input>
            <v-btn type="submit" class="mt-3" color="info" variant="tonal"
              >Add Hero</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Hero from "../../services/api.hero";
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const listCountry = ref([
      "Belgewater",
      "Demacia",
      "Freljord",
      "Nowhere",
      "Ionia",
      "Ixtal",
      "Noxus",
      "Piltover",
      "Targo",
      "Zaun",
      "Bandle",
      "Shurima",
    ]);
    const listLevel = ref(["D???", "Trung B??nh", "Kh??"]);
    const listCategory = ref([
      "?????u S??",
      "X??? Th???",
      "????? ????n",
      "H??? Tr???",
      "S??t Th???",
      "Ph??p S??",
    ]);
    const hero = ref({
      name: "",
      title: "",
      category: "",
      level: "",
      country: "",
      content: "",
      avatar: "",
    });
    const rules = ref([(value) => !!value || "Required !!!"]);
    const router = useRouter();
    const avatar = ref("");
    return {
      listCountry,
      listLevel,
      listCategory,
      hero,
      rules,
    };
  },
  methods: {
    selectFile(file) {
      this.image = this.$refs.file.files[0];
      console.log(this.image);
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("avatar", this.image);
      formData.append("name", this.hero.name);
      formData.append("title", this.hero.title);
      formData.append("category", this.hero.category);
      formData.append("level", this.hero.level);
      formData.append("country", this.hero.country);
      formData.append("content", this.hero.content);
      if (this.$refs.form.validate()) {
        const response = await Hero.postHero(formData);
        this.$router.push({
          name: "listhero",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>

<style></style>
