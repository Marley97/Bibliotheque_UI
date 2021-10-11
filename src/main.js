import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.config.productionTip = false
Vue.mixin({
  methods:{
    refreshToken(callback){
      let refresh = this.$store.state.user.refresh
      if(!refresh){
        this.$dtore.state.user = null;
      }
      axios.post(this.url+"/refresh/",{"refresh":refresh})
      .then((response) =>  {
        this.$store.state.user.access = response.data.access
        callback()
      })
      .catch((error)=>{
        if(!!error.response && error.response.status == 401){
          this.$store.state.user = null;
        } else {
          console.log(error)
        }
      })
    },
    is_admin(){
      return this.$store.state.is_admin
    },
    is_client(){
      return this.$store.state.adresse

    },
    is_bibliothecaire(){
      return this.$store.state.matricule

    },
    fetchLivre(){
        axios.get(this.url+'/livre/',this.headers)
        .then((response)=>{
            this.$store.state.livre=response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
  },
  computed:{
    url(){
      return this.$store.state.url
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
