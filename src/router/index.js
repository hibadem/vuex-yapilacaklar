import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Anasayfa from "../views/Anasayfa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/login",
    name:"login",
    component: Login

  },
  {
    path: "/",
    name: "anasayfa",
    component: Anasayfa,
    
  },
 
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
