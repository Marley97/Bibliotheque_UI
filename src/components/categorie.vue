<template>
    <div>
        <label>Nom</label>
        <input v-model="nom" type="text" name="" placeholder=""/>
        <button v-on:click="ajouter">Ajouter</button>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            nom:""
        }
    },
    methods:{
        ajouter(){
            let data=new FormData()
            data.append("nom",this.nom);
            axios.post("http://127.0.0.1:8000/api/categorie/",data,this.headers)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
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
<style>
    
</style>