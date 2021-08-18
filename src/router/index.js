import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/register.vue'
import Login from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Home', component: Home
  },
  {path: '/register',name: 'register', component: Register},
  {path: '/login',name: 'login', component: Login},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
