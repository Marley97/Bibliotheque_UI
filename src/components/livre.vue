<template >
    <div>
        <label for="">ISB</label>
        <input v-model="isbn" type="text" name=""  /><br />
        <label for="">Titre</label>
        <input v-model="titre" type="text" name=""  /><br />
        <label for="">Auteur</label>
        <input v-model="auteur" type="text" name=""  /><br />
        <label for="">Description</label>
        <input v-model="description" type="text" name=""  /><br />
        <label for="">Couverture</label>
        <input @change="(e)=>couv(e)" type="file" name=""  /><br />
        <label for="">Pdf</label>
        <input @change="(e)=>pdff(e)" type="file" name=""  /><br />
        <label for="">Annee Publication</label>
        <input v-model="annee_publication" type="date" name=""  /><br />
        <label for="">Langue</label>
        <input v-model="langue" type="text" name=""  /><br />
        <label for="">Nombre Exemplaire</label>
        <input v-model="nombre_exemplaire" type="number" name=""  /><br />
        <label for="">Prix</label>
        <input v-model="prix" type="text" name="" placeholder="" /><br />
        <select v-model="categorie">
            <option>.........................</option>
            <option v-for = "categorie in $store.state.categorie " :key="categorie.id" :value="categorie.id">{{categorie.nom}}</option>
        </select>
        <button v-on:click="ajouter">Enregistre</button>    
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
        isbn:"",
        titre:"",
        couverture:null,
        pdf:null,
        annee_publication:"",
        langue:"",
        nombre_exemplaire:"",
        prix:"",
        categorie:"",
        auteur:"",
        description:"",

    }
    },
    mounted(){
        this.fetchData()
        
    },
    methods:{
        couv(e){
            this.couverture=e.target.files[0]
        },
        pdff(e){
            this.pdf=e.target.files[0]
        },
    fetchData(){
        axios.get(this.url+'/categorie/',this.headers)
        .then((response)=>{
            this.$store.state.categorie=response.data
            console.log(response.data)
            console.log(this.$store.state.categorie)
            alert("success")

        })
        .catch((error)=>{
            console.log(error)
        })
        }, 
    ajouter(){
        let data=new FormData()
        data.append("isbn",this.isbn);
        data.append("titre",this.titre);
        data.append("couverture",this.couverture);
        data.append("pdf",this.pdf);
        data.append("annee_publication",this.annee_publication);
        data.append("langue",this.langue);
        data.append("nombre_exemplaire",this.nombre_exemplaire);
        data.append("prix",this.prix);
        data.append("categorie",this.categorie);
        data.append("auteur",this.auteur);
        data.append("description",this.description);
        axios.post("http://127.0.0.1:8000/api/livre/",data,this.headers)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
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
<style>
    
</style>