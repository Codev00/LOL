<template>
  <div class="main">
    <form @submit.prevent="submitForm">
      <!-- Email input -->
      <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa-solid fa-user"></i
        ></span>
        <input
          type="text"
          id="registerUsername"
          class="form-control"
          placeholder="6-10"
          minlength="6"
          maxlength="10"
          v-model="username"
        />
      </div>

      <!-- Password input -->
      <div class="input-group mb-4">
        <span class="input-group-text" id="basic-addon1"
          ><i class="fa-solid fa-lock"></i
        ></span>

        <input
          type="password"
          id="form3Example4"
          class="form-control"
          placeholder="6-8"
          minlength="6"
          maxlength="8"
          v-model="password"
        />
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          id="form2Example33"
          checked
        />
        <label class="form-check-label" for="form2Example33">
          Subscribe to our newsletter
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Sign up
      </button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>or sign up with:</p>
        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-primary btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import apiUser from "../../services/api.user";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const submitForm = async () => {
      const data = {
        username: username.value,
        password: password.value,
      };
      await apiUser.register(data);
      router.push({ name: "loginview" });
    };
    return { username, password, submitForm };
  },
};
</script>

<style scoped>
.main {
  width: 75%;
}
</style>
