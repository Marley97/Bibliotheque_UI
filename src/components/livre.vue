<template >
    <div>
        <div class="form-wrapper">
            <div class="row">
                <div class="col-3">
                    <div class="form-group">
                        <label for="">ISBN</label>
                        <input v-model="isbn" type="text" name=""  />
                    </div>
                    <div class="form-group">
                        <label for="">Titre</label>
                        <input v-model="titre" type="text" name=""  />
                    </div>
                    <div class="form-group">
                        <label for="">Auteur</label>
                        <input v-model="auteur" type="text" name=""  />
                    </div>
                    <div class="form-group">
                        <label for="">Langue</label>
                        <input v-model="langue" type="text" name=""  />
                    </div>
                </div>

                <div class="col-3">
                    <div class="form-group">
                        <label for="">Description</label>
                        <textarea v-model="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Annee Publication</label>
                        <input v-model="annee_publication" type="date" name=""  />
                    </div>
                    <div class="form-group">
                        <label for="">Nombre Exemplaire</label>
                        <input v-model="nombre_exemplaire" type="number" name=""  />
                    </div>
                </div>

                <div class="col-3">
                    <div class="form-group">
                        <label for="">Couverture</label>
                        <input @change="(e)=>couv(e)" type="file" name=""  />
                    </div>
                    <div class="form-group">
                        <label for="">Pdf</label>
                        <input @change="(e)=>pdff(e)" type="file" name=""  />
                    </div>
                    <div class="form-group">
                        <label for="">Prix</label>
                        <input v-model="prix" type="text" name="" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label>Categorie</label>
                        <select v-model="categorie">
                            <option>.........................</option>
                            <option v-for = "categorie in $store.state.categorie " :key="categorie.id" :value="categorie.id">{{categorie.nom}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="btn-wrapper">
                <button class="btn btn-submit" v-on:click="ajouter">Enregistrer</button>
            </div>
        </div>  
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
<style scoped>
.form-wrapper {
    padding: 20px 0;
    background: white;
}
.row {
    display: flex;
    justify-content: space-between;
    margin: 0px 120px;
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