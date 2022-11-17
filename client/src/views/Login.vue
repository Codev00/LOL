<template>
  <div class="login-page">
    <div class="login-body">
      <div class="login-list">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <RouterLink
              :to="{ name: 'loginview' }"
              :class="['nav-link', login ? 'select' : '']"
              id="tab-login"
              data-mdb-toggle="pill"
              role="tab"
              @click="select_login"
              >Login</RouterLink
            >
          </li>
          <li class="nav-item" role="presentation">
            <RouterLink
              :to="{ name: 'registerview' }"
              :class="['nav-link', register ? 'select' : '']"
              id="tab-register"
              data-mdb-toggle="pill"
              role="tab"
              @click="select_register"
              >Register</RouterLink
            >
          </li>
        </ul>
        <div class="login-item">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const login = ref(true);
    const register = ref(false);
    const select_login = () => {
      login.value = true;
      register.value = false;
    };
    const select_register = () => {
      login.value = false;
      register.value = true;
    };
    return { login, register, select_login, select_register };
  },
};
</script>

<style scoped>
.login-page {
  background-image: url("/login_back.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.login-body {
  min-width: 450px;
  min-height: 580px;
  background-color: rgba(26, 25, 25, 0.7);
  border-radius: 10px;
}
.login-body .login-list {
  margin: 50px 30px;
}
.select {
  background-color: #3b71ca;
  color: aliceblue;
}
.login-item {
  display: flex;
  height: 400px;
  width: 100%;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
}
</style>
