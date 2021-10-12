<template>
<div class="small-container cart-page">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
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
                            <a href="">Remove</a>
                        </div>
                    </div>
                </td>
                <td>
                    <span v-on:click="cart.quantite++" class="bt">+</span>
                    <input v-model="cart.quantite" type="text">
                    <span v-on:click="cart.quantite--" class="bt">-</span>
                </td>
                <td>{{cart.prix}}</td>
            </tr>
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Grand Total</td>
                    <td>{{somme}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
            somme:0      
        }
    },
        mounted(){
        this.calcultotal()
        console.log(this.$store.state.cart)

        
    },
    methods:{
        calcultotal(){
            for (let i=0; i<this.$store.state.cart.length; i++){
                this.somme+=this.$store.state.cart[i].livres.prix*this.$store.state.cart[i].quantite
            }
            console.log(this.somme)

        }
    }
}
</script>
<style scoped src="../assets/table.css">
    
</style>