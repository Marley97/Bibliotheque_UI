<template>
    <div>
        <label>Username</label>
        <input v-model ="username" type="" nom="" placeholder=""/>
        <label>FirstName</label>
        <input v-model ="first_name" type="" nom="" placeholder=""/>
        <label>LastName</label>
        <input v-model ="Last_name" type="" nom="" placeholder=""/>
        <label>Password</label>
        <input v-model ="password" type="" nom="" placeholder=""/>
        <label>Adresse</label>
        <input v-model ="adresse" type="" nom="" placeholder=""/>
        <label>Telephone</label>
        <input v-model ="telephone" type="" nom="" placeholder=""/>
        <button v-on:click="ajouter">Ajouter</button>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            username:"",
            first_name:"",
            Last_name:"",
            password:"",
            adresse:"",
            telephone:"",
        }
    },
    methods:{
        ajouter(){
        let data = new FormData()
        data.append("username",this.username);
        data.append("first_name",this.first_name);
        data.append("last_name",this.last_name);
        data.append("password",this.password);
        data.append("adresse",this.adresse);
        data.append("telephone",this.telephone);
         axios.post(this.url+'/register/',data)
        .then((response)=>{
            alert("success")
            console.log(response)
            this.$router.push('/login')
        })
        .catch((error)=>{
            console.log(error)
        })
    },

    },
    mounted(){
        
    },
   
    
}
</script>
<style>
    
</style>
