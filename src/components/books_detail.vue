<template>
<div class="card">
  <img :src="livre.couverture">
  <div class="book-info">
    <h2>{{livre.titre}}</h2>
    <p class="price">{{livre.prix}}</p>
    <p>Prix Total : <span>{{total}}</span></p>
    <p>{{livre.description}}</p>
    <button v-on:click="diminuer(livre.prix)">-</button>
    <input v-model ="quantite" type="" name="" placeholder="">
    <button v-on:click="augmenter(livre.prix)">+</button>
    <p><button @click="Cart">Cart</button></p>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            livre:[],
            quantite:1,
            total:1
            
        }
    },
    mounted() {
        let fk = this.$route.params.fk
        console.log(fk)
        axios.get(this.$store.state.url+"/livre/"+fk+"/")
        .then((response)=>{
            console.log(response.data)
            this.livre = response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    methods:{
        diminuer(prix){
        if(this.quantite>1){
            this.quantite--
            this.total= this.quantite*prix
        }
        },
        augmenter(prix){
            this.quantite++
            this.total=this.quantite*prix
        },
        Cart(){
            if(this.$store.state.user.length === 0){
                this.$router.push('/login')
            }else{
            let id = -1
            for(let i = 0;i<this.$store.state.cart.length;i++){
                if(this.$store.state.cart[i].livres.id===this.livre.id){
                    id = i
                }
            }
            if(id!=-1){
                this.$store.state.cart[id].quantite+=this.quantite
            }else{
            axios.post(this.url+'/panier/',
                    {
                    "client":this.$store.state.user.client_id,
                    "livres":this.livre.id,
                    "quantite":this.quantite,
                    "prix":this.total,
                    "paye":false
                    }
                ,this.headers)
            .then((response)=>{
                console.log(response.data)
                this.$store.state.cart.push({
                    "client":this.$store.state.user.client_id,
                    "livres":this.livre,
                    "quantite":this.quantite,
                    "prix":this.total
                })
                this.$router.push('/vendu')
            })
            .catch((error)=>{
                console.log(error)
                console.log(response.data)
            })
            }
        }
        }
    }
    
};
</script>
<style scoped src="../assets/card.css"> 
    
</style>