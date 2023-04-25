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
                   <label for="mdp">Entrez votre mot de passe</label>
                   <input type="password" class="form-control" id="mdp" placeholder="Gabi123+" v-model="mdp">
                 </div>
                 
                
              </fieldset>
              <div style="margin-bottom: 40px;"></div>
              <button type="button" class="btn btn-primary" @click="connekt">Connexion</button>
             </form>
         </div>
</template> 

<script>

import { store } from "../store.js";
import axios from 'axios'

export default {
  name: "ExportComp",

  data() {
    return {
      dataStore: store,
      identif: "",
      mdp : "",
      valid: 0,
    };
  },

  methods: {
    async connekt(){


      await axios.get('https://apitokendustry.alwaysdata.net/connect?identif='+ this.identif + '&mdp=' + this.mdp).then(response => {this.valid = response.data[0].compteur})


console.log(this.valid);

if(this.valid == 1){

  this.dataStore.data.acces = 1;
  
  

 this.$router.push('/HomeView')

}

else{console.log("Bouh !")}
     

    },

  }
}
</script>
