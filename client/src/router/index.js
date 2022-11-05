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
// Login
import LoginView from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: HomeView,
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
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
