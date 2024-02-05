import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Welcome,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/login",
      component: LogIn,
    },
  ],
});

export default router;
