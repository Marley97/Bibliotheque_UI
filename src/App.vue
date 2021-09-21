<template>
  <div id ="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import axios from "axios"
export default {
  components:{
    Header,
    Footer,
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

<style src="./assets/styles.css">
</style>
