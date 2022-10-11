import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import suss from "@/views/suss";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/suss',
    name: 'suss',
    component: suss
  }
]

const router = new VueRouter({
  routes
})

export default router
