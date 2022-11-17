<template>
  <div class="header">
    <div class="logo">
      <img src="/Logo.png" width="100" alt="LOL" />
    </div>
    <div class="nav-bar">
      <div class="nav-items">
        <router-link :to="{ name: 'champions' }">Champions</router-link>
      </div>
      <div class="nav-items">
        <router-link :to="{ name: 'esport' }">Esport</router-link>
      </div>
      <div class="nav-items">
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>
    </div>
    <div class="login" v-if="!login">
      <RouterLink :to="{ name: 'loginview' }"><span>Log In</span></RouterLink>
    </div>
    <div class="user" v-else>
      <img src="/logo1.png" width="60" alt="avatar" />
      <div class="options">
        <div class="profile item">Profile</div>
        <div class="favorite item">Favorite</div>
        <div class="log-out item">Log-Out</div>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useUser } from "../../stores/userStore";
export default {
  setup() {
    const userStore = useUser();
    return {
      ...storeToRefs(userStore),
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  position: fixed;
  height: 90px;
  width: 100%;
  top: 0;
  padding: 0 150px;
  justify-content: space-between;
  background-color: rgb(16, 18, 21);
  color: aliceblue;
  z-index: 1;
}
.logo {
  align-items: center;
  justify-content: center;
}
.logo img {
  margin: 5px 0;
}
.nav-bar {
  display: flex;
  align-items: center;
}
/* Nav Bar */
.nav-bar div {
  margin: 0 20px;
}
.nav-bar .nav-items {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 30px;
  padding: 13px 14px;
  cursor: pointer;
}
.nav-bar .nav-items a {
  text-decoration: none;
  color: aliceblue;
}
/* Login */
.login {
  position: relative;
  display: flex;
  align-items: center;
}
.login a {
  text-decoration: none;
  border: 1px solid yellowgreen;
  padding: 5px 15px;
  border-radius: 5px;
  font-family: "Times New Roman", Times, serif;
  color: aliceblue;
}

/* user */
.user {
  position: relative;
  align-items: center;
  text-align: center;
  height: 60px;
  margin-top: 20px;
  z-index: 100;
}
.user img {
  cursor: pointer;
}
.user:hover .options {
  display: block;
}
.user .options {
  display: flex;
  flex-flow: column;
  background: rgba(10, 10, 10, 0.5);
  width: 120px;
  position: absolute;
  right: 0;
  top: 80px;
  border-radius: 4px;
  display: none;
  transition: all 0.2s linear;
}
.user .options:before {
  content: "";
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  background-color: transparent;
  transform: translateY(-100%);
}
.user .options .item {
  color: rgb(235, 235, 235);
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bolder;
  transition: all 0.2s linear;
}
.user .options .item:first-child {
  position: relative;
}
.user .options .item:first-child:before {
  content: "";
  position: absolute;
  top: 0;
  right: 10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba(10, 10, 10, 0.5);
  transform: translateY(-100%);
  transition: all 0.2s linear;
}
.user .options .item:first-child:hover:before {
  border-bottom-color: rgb(128, 128, 128);
}
.user .options .item:hover {
  color: rgb(235, 235, 235);
  background-color: rgb(128, 128, 128);
}
</style>
