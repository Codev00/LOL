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
          class="form-control"
          maxlength="10"
          placeholder="Username"
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
          id="form2Example2"
          class="form-control"
          placeholder="Password"
          maxlength="8"
          v-model="password"
        />
      </div>

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example34"
              checked
            />
            <label class="form-check-label" for="form2Example34">
              Remember me
            </label>
          </div>
        </div>

        <div class="col">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Sign in
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
import axios from "axios";
import apiUser from "../../services/api.user";
import { ref } from "vue";
import { useUser } from "../../stores/userStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const userStore = useUser();
    const username = ref("");
    const password = ref("");
    const submitForm = async () => {
      try {
        const data = {
          username: username.value,
          password: password.value,
        };
        const response = await apiUser.login(data);
        localStorage.setItem("token", response.token);
        userStore.account();
        userStore.login = true;
        router.push("/");
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    return { username, password, submitForm, ...storeToRefs(userStore) };
  },
};
</script>

<style scoped>
.main {
  width: 75%;
}
</style>
