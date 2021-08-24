<template lang="">
    <div>
        <label>Username</label>
        <input type = "text" v-model ="username" name ="">
        <label>Password</label>
        <input type = "password" v-model ="password" name ="">
        <button @click ="enregistrer">Enregistre</button>     
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            username : "",
            password : "",
            user : []
        }
    },
    mounted() {
        console.log("login mounted")
    },
    methods:{
    enregistrer(){
        let data = new FormData();
        data.append("username", this.username);
        data.append("password",this. password);
        axios.post(this.url+"/login/",data)
        .then((response)=>{
            this.$store.state.user = response.data
            console.log(this.$store.state.user)
        })
        .catch((error)=>{
            console.log(error)
        })
        }
    },   
};
</script>
<style scoped>
    
</style>