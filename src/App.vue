<template>
  <div id ="app">
    <div class="wrapper">
      <Header/>
      <div class="byose">
        <router-view></router-view>
      </div>
      <Footer/>
    </div>
    <!-- <div v-else>
      <Login />
    </div> -->
  </div>
</template>
<script>
import Footer from './components/footer.vue'
import Header from './components/header.vue'
// import Login from './components/login.vue'
import axios from "axios"
export default {
  components:{
    Header,
    Footer,
    // Login
  },
  mounted() {
   
    console.log(this.$store.user)
    var user = JSON.parse(localStorage.getItem('user'))
    if(user){
      this.$store.state.user = user;
    }
    console.log(this.$store.state.user)
  },
  watch:{
    "$store.state.user":{
      deep:true,
      handler(new_val){
        if(!!(new_val)){
          localStorage.setItem('user',JSON.stringify(new_val));
        }else{
          localStorage.removeItem('user')
        }
      }
    }
      
    },

    computed:{
             headers(){
            return{
                 headers:{
                     "Content-Type":"multipart/form-data"

                 }
             }
         }
     }
  
  };
</script>

<style scoped>
.byose {
  min-height: calc(100vh - 397.27px);
}
</style>
