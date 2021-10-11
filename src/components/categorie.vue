<template>
    <div class="categorie">
    <div v-for = "item in $store.state.categorie" :key="item.id">
        <div><p>{{item.nom}}</p>
            <div class="row">
                <div class="card"v-for="items in $store.state.livre.filter(x => x.categorie.nom===item.nom)" :key="items.id">
                    <img class="card-img" :src="items.couverture">
                    <p class="card-text">{{items.titre}}</p>
                </div>
            </div>
        </div>
    </div>
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
    mounted(){
        this.ajouter()
        this.fetchLivre()
    },
    methods:{
        ajouter(){
            axios.get("http://127.0.0.1:8000/api/categorie/",this.headers)
            .then((response)=>{
                this.$store.state.categorie=response.data
                console.log(this.$store.state.categorie)
            })
            .catch((error)=>{
                console.log(error)
            })
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