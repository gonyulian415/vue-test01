import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'Login',
    component:Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    redirect: "/qe",
    children: [
      {
        path: "/qe",
        name: "QuillEditor",
        component: () => import("@/components/QuillEditor.vue"),
      },
      {
        path: "/vca",
        name: "VueCroppa",
        component: () => import("@/components/VueCroppa.vue"),
      },
      {
        path: "/plazy",
        name: "Pic_lazyload",
        component: () => import("@/components/Pic_lazyload.vue"),
      },
      {
        path: "/account",
        name: "Account",
        component: () => import("@/components/Account.vue"),
        beforeEnter: (to, from, next) => {
          console.log(to);
          next();
        },
        beforeLeave: (to, from, next) => {
          console.log(to);
          next();
        },
      },
      {
        path: "/lodash",
        name: "Lodash",
        component: () => import("@/components/Lodash.vue"),
      },
      {
        path: "/cors",
        name: "Cors",
        component: () => import("@/components/Test.vue"),
      },
      {
        path: "/xbt",
        name: "Xbt",
        component: () => import("@/components/Xbt.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach from:");
  console.log(from);
  console.log("beforeEach to:");
  console.log(to);
  next();
});

router.afterEach((to, from) => {
  console.log("afterEach from:");
  console.log(from);
  console.log("afterEach to:");
  console.log(to);
});

export default router;
