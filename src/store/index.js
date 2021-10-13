import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    categorie: [],
    livre:[],
    cart:[],
    search:"",
    url: "http://127.0.0.1:8000/api",
    url_api:"http://localhost:8081"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
