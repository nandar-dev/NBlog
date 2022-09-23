import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/auth/LoginPage.vue";
import SignUpPage from "../components/auth/SignUpPage.vue";
import HomePage from "../components/HomePage.vue";
import CreateBlog from "../components/admin/CreateBlog.vue";
import MyBlogs from "../components/admin/MyBlogs.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpPage,
  },
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/admin/myblogs",
    name: "myblogs",
    component: MyBlogs,
  },
  {
    path: "/createblog",
    name: "createblog",
    component: CreateBlog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
