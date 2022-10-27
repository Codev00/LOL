import { createRouter, createWebHistory } from "vue-router";
// Home
import HomeView from "../views/HomeView.vue";
// Admin
import AdminView from "../views/AdminView.vue";
import ListHero from "../components/hero/listHero.vue";
import AddHero from "../components/hero/addHero.vue";
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
          path: "listhero",
          name: "listhero",
          component: ListHero,
        },
        {
          path: "addhero",
          name: "addhero",
          component: AddHero,
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
