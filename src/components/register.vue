<template lang="">
    <div>
        <div class='wrapper'>
            <div class="container">
                <div class="header">
                    <h1>Register</h1>
                </div>
                <div class="main">
                    <div class='form-row'>
                        <div class='col-3'>
                            <div class='form-group'>
                                <label>Nom</label>
                                <input type = "text" v-model ="first_name" name ="">
                            </div>
                            <div class='form-group'>
                                <label>Prenom</label>
                                <input type = "text" v-model ="last_name" name ="">
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class='form-group'>
                                <label>Username</label>
                                <input type = "text" v-model ="username" name ="">
                            </div>
                            <div class='form-group'>
                                <label>Password</label>
                                <input type = "password" v-model ="password" name ="">
                            </div>
                        </div>
                        <div class='col-3'>
                            <div class='form-group'>
                                <label>E-mail</label>
                                <input type = "email" v-model ="email" name ="">
                            </div>
                            <div class='form-group'>
                                <label>Adresse</label>
                                <input type = "text" v-model ="adresse" name ="">
                            </div>
                        </div>
                    </div>
                    <div class='form-group tel'>
                        <label>Telephone</label>
                        <input type = "text" v-model ="telephone" name ="">
                    </div>
                    <button @click ="enregistrer">Enregistre</button>
                    <div class="link">
                        
                    </div>
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
            first_name : "",
            last_name : "",
            password : "",
            email :"",
            adresse :"",
            telephone :""
        }
    },
    methods:{
    enregistrer(){
        let data = new FormData();
        data.append("username", this.username);
        data.append("first_name", this.firstname);
        data.append("last_name", this.lastname);
        data.append("password",this. password);
        data.append("email", this.email);
          data.append("telephone", this.telephone);
        data.append("adresse", this.adresse);
        axios.post("http://127.0.0.1:8000/api/register/",data)
        .then((response)=>{
            console.log(response)
            alert("success")
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
	width: 780px;
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
.form-row {
    display: flex;
    justify-content: space-between;
}
.form-row > * {
    flex-basis: 32%;
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
    padding: 0 10px;
	box-sizing: border-box;
	font-size: 15px;
	color: #333;
	margin-bottom: 25px;
}
.main input {
    width: 100%;
}
.tel {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tel input {
    width: auto;
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