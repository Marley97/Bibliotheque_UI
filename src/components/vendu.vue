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
                    <input v-model = "cart.quantite" type="text">
                    <span v-on:click="cart.quantite--" class="bt">-</span>
                </td>
                <td>{{cart.prix}}</td>
            </tr>
        </table>
        <div class="total-price">
            <table>
                <tr>
                    <td>Total</td>
                    <td>125000</td>
                </tr>
                <tr>
                    <td>Grand Total</td>
                    <td>142,000 BIF</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{      
        }
    },
        mounted(){
        console.log(this.$store.state.cart)
        
    },
}
</script>
<style scope src="../assets/table.css">
    
</style>