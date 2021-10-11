<template lang="">
    <div class='wrapper'>
        <div class="container">
            <div class="header">
                <h1>Login</h1>
            </div>
            <div class="main">
                <div class="form-group">
                    <label>Username</label>
                    <span>
                        <i class="mdi mdi-account"></i>
                        <input type="text" v-model ="username" name="" placeholder="username">
                    </span>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <span>
                        <i class="mdi mdi-lock"></i>
                        <input type="password" v-model ="password" name="" placeholder="password">
                    </span>
                </div>
                
                <button @click ="enregistrer">Login</button>
                <div class="link">
                    
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            username : "",
            password : "",
            user : []
        }
    },
    mounted() {
        console.log("login mounted")
    },
    methods:{
    enregistrer(){
        let data = new FormData();
        data.append("username", this.username);
        data.append("password",this. password);
        axios.post(this.url+"/login/",data)
        .then((response)=>{
            this.$store.state.user = response.data
            this.$router.push('/')
            console.log(this.$store.state.user)
        })
        .catch((error)=>{
            console.log(error)
        })
        }
    },   
};
</script>
<style scoped>
.wrapper {
    font-family: sans-serif;
    background: url('../assets/biblio1.jpg') no-repeat fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.wrapper::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 0;left: 0;right: 0;bottom: 0;
    z-index: -1;
}
.container{
	width: 380px;
	border-radius: 15px;
	background-color: #f5f5f5;
}
.header{
	text-align: center;
	padding-top: 25px;
}
.header h1{
	color: #333;
	font-size: 40px;
	margin-bottom: 40px;
}
.main {
	padding: 0 35px;
}
.form-group > label {
	display: block;
	margin-bottom: 3px;
}
.main input, button{
	width: 100%;
	height: 40px;
	border: none;
	outline: none;
	padding-left: 40px;
	box-sizing: border-box;
	font-size: 15px;
	color: #333;
	margin-bottom: 25px;
}
.main .mdi {
	margin-top: 8px;
	font-size: 20px;
}
.main button{
	padding-left: 0px;
	background-color:#b3acf1;
	letter-spacing: 1px;
	font-weight: bold;
	margin-bottom: 70px;
    cursor: pointer;
}
.main button :hover{
	box-shadow: 2px 2px 5px #555;
	background-color: #7799d4;
}
.main input:hover{
	box-shadow: 2px 2px 5px #555;
	background-color: #ddd;
}
.main span{
	position: relative;
}
.main i{
	position: absolute;
	left : 15px;
	color : #333;
}
</style>