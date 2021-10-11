<template >
    <div>
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
</template>
<script>
import axios from "axios"
export default {
    mounted(){
        this.fetchLivre()
        
    },
    methods:{
        
            fetchLivre(){
        axios.get(this.url+'/livre/',this.headers)
        .then((response)=>{
            this.$store.state.livre=response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    },
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
.form-wrapper {
    padding: 20px 0;
    background: white;
}
.row {
    justify-content: flex-start;
    margin: 0px 40px;
}
.col-3 {
    flex-basis: 32.8%;
}
.form-group {
    margin-bottom: 10px;
}
.form-group > * {
    display: block;
    width: 100%;
}
.form-group label {
    font-size: 13px;
    color: #222;
    font-weight: bold;
    margin-bottom: 3px;
}
.form-group input, .form-group select {
    outline: none;
    border: 1px solid #ccc;
    height: 35px;
    padding: 7px;
    border-radius: 5px;
    box-sizing: border-box;
    background: white;
}
.form-group textarea {
    outline: none;
    border: 1px solid #ccc;
    padding: 7px;
    height: 97px;
    border-radius: 5px;
    box-sizing: border-box;
}
.btn-wrapper {
    text-align: center;
}
.btn {
    padding: 12px 60px;
    border: none;
    outline: none;
}
.btn-submit {
    background: #43c5ff;
    font-size: 15px;
    font-weight: 500;
}
</style>