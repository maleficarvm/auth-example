import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Landing },
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  el: "#app ",
  router,
  render: (h) => {
    return h(App);
  },
});
