<template>
    <div>
    <table>
        <thead>
            <th>ISBN</th>
            <th>TITRE</th>
            <th>COUVERTURE</th>
            <th>ANNEEPUBLICATION</th>
            <th>LANGUE</th>
            <th>NOMBREEXEMPLAIRE</th>
            <th>PRIX</th>
            <th>CATEGORIE</th>
        </thead>
        <tbody v-for="livre in $store.state.livre" :key= "livre.id" :value="livre.id">
            <td>{{livre.isbn}}</td>
            <td>{{livre.titre}}</td>
            <td>{{livre.auteur}}</td>
            <td>{{livre.description}}</td>
            <td><img :src="livre.couverture" width="20px" heigth="20px"></td>
            <td>{{livre.annee_publication}}</td>
            <td>{{livre.langue}}</td>
            <td>{{livre.nombre_exemplaire}}</td>
            <td>{{livre.prix}}</td>
            <td>{{livre.categorie.categorie}}</td>
        </tbody>
    </table>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted() {
        this.fetchLivre()
    },
    methods: {
        fetchLivre(){
            axios.get(this.url+'/livre/',this.headers)
            .then((response)=>{
                this.$store.state.livre=response.data
                console.log(response.data)
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
    
}
</script>
<style>
    
</style>