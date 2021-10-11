<template>
<div>
    <Search v-if = "$store.state.search.length!=0"></Search>
    <div v-else>
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <h1>
                    Les bons livres n'abandonnent pas<br>

                    tous leurs secrets à la fois
                    </h1>
                    <p>
                        Tourner les pages d'un livre ne vous brûlera pas <br>les doigts mais peut vous réchauffer le coeur.
                        
                    </p>
                    <a href="" class="btn-link">Create Now</a>
                </div>
                <div class="col-2">
                    <img src="../assets/unnamed.png">
                </div>
            </div>
        </div>

        <div class="category">
            <div class="row">
                <div class="card" v-for = "item in $store.state.livre" :key="item.id" @click="bookroter(item)">
                    <div class="card-inner">
                        <img class="card-img" :src="item.couverture">
                        <p class="card-text">{{item.titre}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import Search from '../components/search.vue'

export default {
    components: {
        Search
  },
   mounted() {
        this.fetchLivre() 
   },
   methods: {
    fetchLivre(){
        axios.get(this.url+'/livre/',this.headers)
        .then((response)=>{
            this.$store.state.livre=response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    bookroter(bk){
        this.$router.push('/books_detail/'+bk.id)
    }
   },
}
</script>
<style scoped>
.category .row {
    justify-content: flex-start;
}

</style>