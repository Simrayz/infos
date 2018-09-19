import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!store.state.auth.authenticated) {
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/information",
      name: "InfoList",
      component: () => import("./views/Information.vue"),
      beforeEnter: requireAuth
    },
    {
      path: "/information/:name",
      name: "info.show",
      component: () => import("./components/Info.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView"),
      meta: { layout: "pages" }
    }
  ]
});
