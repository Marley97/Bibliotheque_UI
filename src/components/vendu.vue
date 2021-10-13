<template>
<div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Action</th>
                <th>Total</th>
            </tr>
            <tr v-for =" cart in $store.state.cart" :key = "cart.id">
                <td >
                    <div class="cart-info">
                        <img :src="cart.livres.couverture">
                        <div>
                            <p class="text">{{cart.livres.titre}}</p>
                            <small class="text">{{cart.livres.prix}}</small>
                            <br>
                            <a style="cursor:pointer;" @click="remove(cart)">Remove</a>
                        </div>
                    </div>
                </td>
                <td class="" >Valider Quantite</td>
                <td>
                    <span v-on:click="augmenter(cart)" class="bt">+</span>
                    <input v-model="cart.quantite" type="text">
                    <span v-on:click="diminuer(cart)" class="bt">-</span>
                </td>
                <td>{{cart.prix}}</td>
            </tr>
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Total</td>
                    <td>{{calcSomme}}</td>
                </tr>
                <button class="btn-primary">Payer avec iDenariyo</button>
            </table>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    computed:{
        calcSomme(){
            let somme=0;
            console.log(this.$store.state.cart)
            for(let i =0;i<this.$store.state.cart.length;i++){
                somme += this.$store.state.cart[i].livres.prix*this.$store.state.cart[i].quantite
            }
            return somme
        },
    },
    methods:{
        augmenter(cart){
            let index = this.$store.state.cart.indexOf(cart)
            this.$store.state.cart[index].quantite+=1
            this.$store.state.cart[index].prix+= this.$store.state.cart[index].livres.prix
        },
        diminuer(cart){
            let index = this.$store.state.cart.indexOf(cart)
            let quantite = this.$store.state.cart[index].quantite
            if(quantite >1){
                this.$store.state.cart[index].quantite-=1
                this.$store.state.cart[index].prix-= this.$store.state.cart[index].livres.prix
            }
        },
        remove(cart){
            console.log(cart)
            axios.delete(this.url+'/panier/'+cart.id+'/', this.headers)
            .then((res)=>{
                let index=this.$store.state.cart.indexOf(cart)
                this.$store.state.cart.splice(index,1)
                console.log(res.data)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
};
</script>
<style scoped src="../assets/table.css">

</style>