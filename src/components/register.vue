<template lang="">
    <div>
        <label>Username</label>
        <input type = "text" v-model ="username" name ="">
        <label>Nom</label>
        <input type = "text" v-model ="first_name" name ="">
        <label>Prenom</label>
        <input type = "text" v-model ="last_name" name ="">
        <label>Password</label>
        <input type = "password" v-model ="password" name ="">
        <label>E-mail</label>
        <input type = "email" v-model ="email" name ="">
        <label>Adresse</label>
        <input type = "text" v-model ="adresse" name ="">
        <label>Telephone</label>
        <input type = "text" v-model ="telephone" name ="">
        <button @click ="enregistrer">Enregistre</button>     
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            username : "",
            first_name : "",
            last_name : "",
            password : "",
            email :"",
            adresse :"",
            telephone :""
        }
    },
    methods:{
    enregistrer(){
        let data = new FormData();
        data.append("username", this.username);
        data.append("first_name", this.firstname);
        data.append("last_name", this.lastname);
        data.append("password",this. password);
        data.append("email", this.email);
          data.append("telephone", this.telephone);
        data.append("adresse", this.adresse);
        axios.post("http://127.0.0.1:8000/api/register/",data)
        .then((response)=>{
            console.log(response)
            alert("success")
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