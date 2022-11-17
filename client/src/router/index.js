import { createRouter, createWebHistory } from "vue-router";
// Home
import HomeView from "../views/HomeView.vue";
// Admin
import AdminView from "../views/AdminView.vue";
import ListHero from "../components/hero/listHero.vue";
import AddHero from "../components/hero/addHero.vue";
import Detail from "../components/hero/Hero.vue";
import EditHero from "../components/hero/editHero.vue";
//Skins
import ListSkins from "../components/skin/listSkins.vue";
import AddSkins from "../components/skin/addSkins.vue";
import DetailSkin from "../components/skin/Skins.vue";
import EditSkins from "../components/skin/editSkins.vue";
// Home
import Champions from "../components/home/Champions.vue";
import Esport from "../components/home/Esport.vue";
import About from "../components/home/About.vue";
import Champion from "../components/home/Champion.vue";
// Login
import LoginView from "../views/Login.vue";
import Login from "../components/login/Login.vue";
import Register from "../components/login/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/Home/Champions",
    },
    {
      path: "/Home",
      name: "Home",
      component: HomeView,
      children: [
        {
          path: "Champions",
          name: "champions",
          component: Champions,
        },
        {
          path: "Esport",
          name: "esport",
          component: Esport,
        },
        {
          path: "About",
          name: "about",
          component: About,
        },
        {
          path: ":name",
          name: "detailChampion",
          component: Champion,
          props: true,
        },
      ],
    },

    // Admin
    {
      path: "/admin/hero",
      name: "admin",
      component: AdminView,
      children: [
        {
          path: "",
          name: "listhero",
          component: ListHero,
        },
        {
          path: "add",
          name: "addhero",
          component: AddHero,
        },
        {
          path: "detail/:id",
          name: "detail",
          component: Detail,
        },
        {
          path: "edit/:id",
          name: "edithero",
          component: EditHero,
        },
      ],
    },
    // Skins
    {
      path: "/admin/skins",
      name: "skins",
      component: AdminView,
      children: [
        {
          path: "",
          name: "listskins",
          component: ListSkins,
        },
        {
          path: "add",
          name: "addskins",
          component: AddSkins,
        },
        {
          path: "detail/:id",
          name: "detailskins",
          component: DetailSkin,
        },
        {
          path: "edit/:id",
          name: "editskins",
          component: EditSkins,
        },
      ],
    },
    // Login
    {
      path: "/Login",
      redirect: "/Login/Sign-in",
    },
    {
      path: "/Account",
      name: "login",
      component: LoginView,
      children: [
        {
          path: "Sign-in",
          name: "loginview",
          component: Login,
        },
        {
          path: "Sign-up",
          name: "registerview",
          component: Register,
        },
      ],
    },
  ],
});

export default router;
