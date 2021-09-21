<template>
            <Search v-if = "$store.state.search.length!=0"></Search>
            <div v-else>
            <Aside></Aside>
			<div class="category">
				<div class="row">
					<div class="card" v-for = "item in $store.state.livre" :key="item.id" @click="bookroter(item)">
						<img class="card-img" :src="item.couverture">
						<p class="card-text">{{item.titre}}</p>
					</div>
				</div>
			</div>
            </div>
</div>
</template>
<script>
import axios from 'axios'
import Aside from '../components/mini_header.vue'
import Search from '../components/search.vue'
export default {
    components: {
        Aside,
        Search
  },
   mounted() {
        this.fetchLivre() 
        this.$store.state.search =null
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
    },
    bookroter(bk){
        this.$router.push('/books_detail/'+bk.id)
    }
   },
}
</script>
<style scope=""></style>