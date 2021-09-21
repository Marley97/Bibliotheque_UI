import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/register.vue'
import Login from '../components/login.vue'
import Categorie from '../components/categorie.vue'
import Livre from '../components/livre.vue'
import Client from '../components/client.vue'
import LivreListe from '../components/livre_list.vue'
import BooksDetail from '../components/books_detail.vue'
import Vendu from '../components/vendu.vue'
import Search from '../components/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Home', component: Home
  },
  {path: '/register',name: 'register', component: Register},
  {path: '/login',name: 'login', component: Login},
  {path: '/categorie',name: 'categorie', component: Categorie},
  {path: '/livre',name: 'livre', component: Livre},
  {path: '/client',name: 'client', component: Client},
  {path: '/livrelist',name: 'livrelist', component: LivreListe},
  {path: '/vendu',name: 'vendu', component: Vendu},
  {path: '/search',name: 'search', component: Search},
  {path: '/books_detail/:fk',name: 'books_detail', component: BooksDetail},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
