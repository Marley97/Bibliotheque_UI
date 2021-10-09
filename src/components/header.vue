<template>
    <div>
       <div class="wrapper">
			<div class="header">
				<div class="row">
					<img class="logo" src="../assets/logo1.png">
					<form @sumit.prevent="rechercher">
						<input type="search" v-model="search" name="" placeholder="search by book name">
						<button type="search" @click.prevent="rechercher"><i class="fa fa-search"></i></button>
					</form>
					<div class="right">
						<i class="fa fa-shopping-cart"></i>
						<i class="fa fa-download"></i>
						<ul>
							<div v-if="this.$store.state.user">
							<li><a @click="logout">logout</a></li>
							<li><a @click="goto">cart <span class="panier">{{$store.state.cart.length}}</span></a></li>
							</div>
							<div v-else>
								<li><a >Wish List</a></li>
								<li><a >Log In</a></li>
								<li><a >Sign Up</a></li>
							</div>
						</ul>
					</div>
				</div>
			</div>
			<div class="nav">
				<div class="row">
					<span>Home</span>
					<span>All Books</span>
					<span>Category</span>
					<span>Writer</span>
					<span>Publisher</span>
					<span>Gallery</span>
					<span>PDF Books</span>
					<span>Blog</span>
					<span>Account</span>
					<span>Contact</span>
				</div>
			</div> 
            </div>		
    </div>
</template>
<script>
import axios from "axios"
import Search from './search.vue'
export default {
	data(){
		return{
			result:null,
		}
	},
	methods:{
		logout(){
			localStorage.removeItem("user")
			this.$store.state.user = null
			this.$router.push('/login')
		},
		goto(){
			this.$router.push("/cart")
		},
		rechercher(){
			axios.get(this.url+'/livre/?titre='+this.search+'',this.headers)
			.then((response)=>{
			this.$store.state.search=response.data
			this.$emit()	
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
<style scope="">
.panier{
	padding : 10px;
	width: 30px;
	height: 30px;
	background:red;
	border-radius:10px;
}
    
</style>