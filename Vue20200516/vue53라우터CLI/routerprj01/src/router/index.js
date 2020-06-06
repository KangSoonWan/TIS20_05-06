import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserLogin from "@/components/user/UserLogin.vue";
//이건 미리 불러오는것임
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    //about은 클릭할떄 불러온느것임
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  //아래를 추가해 준것임
  {
    path: "/signup",
    name: "signup",

    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",

    component: UserLogin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
