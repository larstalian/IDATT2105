import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ContactView from "@/views/ContactView.vue";
import { useAuthStore } from "@/store/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "contact",
  
    meta: { requiresAuth: true },
   
    component: ContactView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  
  },
  {
  path: "/register",
  name: "register",
  component: RegisterView
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: 'login' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !authStore.isLoggedIn) {
    next({ name: 'login' });
  } else {
    next();
  }
});


export default router;
