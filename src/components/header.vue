<template>
    <div>
       <div class="header-wrapper">
			<div class="header">
				<div class="row h-row">
					<img class="logo" src="../assets/logo1.png">
					<form class="form" @sumit.prevent="rechercher">
						<input type="search" name="" placeholder="search by book name">
						<button type="search" @click.prevent="rechercher"><i class="mdi mdi-magnify"></i></button>
					</form>
					<div class="right">
						<div class="cart-logout" v-if="this.$store.state.user">
							<div style="margin-right: 10px;" class="cart-area">
								<router-link to="/cart">
									<i class="mdi mdi-cart" ></i>
									<span class="counter">{{$store.state.cart.length}}</span>
								</router-link>
								
							</div>
							<li v-if="$store.state.user.length!=0"><a @click="logout">logout</a></li>
							<div v-else>
								<li style="margin-right: 10px;"><a @click="$router.push('/register')">Register</a></li>
								<li ><a @click="$router.push('/login')">   Login</a></li>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="nav">
				<div class="row">
					<span><router-link to="/" active-class="active" exact class="links">Home</router-link></span>
                    <span><router-link to="/livre" active-class="active" exact class="links">All Books</router-link></span>
                    <span><router-link to="/categorie" active-class="active" exact class="links">Category</router-link></span>
                    <span><router-link to="" class="links">Writer</router-link></span>
                    <span><router-link to="" class="links">Publisher</router-link></span>
                    <span><router-link to="" class="links">Gallery</router-link></span>
                    <span><router-link to="" class="links">PDF Books</router-link></span>
                    <span><router-link to="" class="links">Blog</router-link></span>
                    <span><router-link to="" class="links">About</router-link></span>
                    <span><router-link to="" class="links">Contact</router-link></span>
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
<style scoped>
.panier{
	padding : 10px;
	width: 30px;
	height: 30px;
	background:red;
	border-radius:10px;
}
.cart-logout {
	display: flex;
	align-items: center;
}
.spacer {
	border: none;
	width: 1px;
	height: 100%;
	background: #ccc;
	margin: 0px 15px;
}
.cart-area {
	position: relative;
}
.mdi-cart {
	font-size: 24px;
	cursor: pointer;
	color: #222;
}
.counter {
	position: absolute;
	display: inline-block;
	top: -5px;
	left: 67%;
	font-weight: 500;
	font-size: 14px;
	background: #FF0B2A;
	color: white;
	border-radius: 50%;
	padding: 0px 4px;
}
</style>