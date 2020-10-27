import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import ContributorView from "@/views/ContributorView.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login, meta: { IsPublic: true } },
  { path: "/Home", component: Home },
  { path: "/Contributor/:id", component: ContributorView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const IsLogged = function() {
  return localStorage.getItem("logged") === "true";
};

router.beforeEach((to, from, next) => {
  if (to.meta.IsPublic || IsLogged()) {
    next();
  } else {
    next("/");
  }
});

export default router;
