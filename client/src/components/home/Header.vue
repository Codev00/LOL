<template>
  <div class="header">
    <div class="logo">
      <img src="/Logo.png" width="100" alt="LOL" />
    </div>
    <div class="nav-bar">
      <div class="nav-items">Champions</div>
      <div class="nav-items">Esport</div>
      <div class="nav-items">About</div>
    </div>
    <div class="user">
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
export default {};
</script>

<style scoped>
.header {
  display: flex;
  position: relative;
  height: 90px;
  width: 100%;
  padding: 0 150px;
  justify-content: space-between;
  background-color: rgb(16, 18, 21);
  color: aliceblue;
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
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  font-size: 30px;
}
/* user */
.user {
  position: relative;
  align-items: center;
  text-align: center;
  height: 60px;
  margin-top: 20px;
}
.user img {
  cursor: pointer;
}
.user img:hover ~ .options {
  opacity: 1;
}
.user .options {
  display: flex;
  flex-flow: column;
  background: grey;
  width: 120px;
  position: absolute;
  right: 0;
  top: 80px;
  border-radius: 10px;
  opacity: 0;
}
.user .options .item {
  padding: 5px 10px;
  cursor: pointer;
  border-bottom: 1px solid rgb(97, 97, 97);
  border-radius: 10px;
}
.user .options .item:hover {
  color: slategray;
  background-color: bisque;
}
</style>
