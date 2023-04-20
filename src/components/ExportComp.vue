<template>
    <div class="">
             <h1>Connexion</h1>
             <form>
               <fieldset>
                 <div class="form-group">
                   <label for="nom">Entrez votre Identifiant</label>
                   <input type="text" class="form-control" id="nom" placeholder="Gabriel" v-model="identif">
                 </div>
                 
                 <div class="form-group">
                   <label for="email">Entrez votre mot de passe</label>
                   <input type="email" class="form-control" id="email" placeholder="Gabi123+" v-model="mdp">
                 </div>
                 
                
              </fieldset>
              <div style="margin-bottom: 40px;"></div>
              <button type="button" class="btn btn-primary" @click="connekt">Connexion</button>
             </form>
         </div>
</template> 

<script>

import { store } from "../store.js";

export default {
  name: "ExportComp",

  data() {
    return {
      dataStore: store,
      identif: "",
      mdp : ""
    };
  },

  methods: {
    connekt(){

if(this.identif == this.dataStore.data.ident && this.mdp == this.dataStore.data.mdp){

  this.dataStore.data.acces = 1;

 this.$router.push('/HomeView')

}

else{console.log("Bouh !")}
     

    },

  }
}
</script>
