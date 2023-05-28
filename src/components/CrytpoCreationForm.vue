<template>
    <div class="">
             <h1>Création de crypto</h1>
             <form>
               <fieldset>
                 <div class="form-group">
                   <label for="identif">Entrez un nom</label>
                   <input type="text" class="form-control" id="identif" placeholder="Gabriel" v-model="nom">
                 </div>
                 
                 <div class="form-group">
                   <label for="password">Entrez une valeur</label>
                   <input type="number" class="form-control" id="email" placeholder="Gabi123+" v-model="valeur">
                 </div>

                 <div class="form-group">
                   <label for="pseudo">Entrez le pseudo du créateur</label>
                   <input type="text" class="form-control" id="pseudo" placeholder="SuperGabou" v-model="pseudoCreateur">
                 </div>       
                 
                
              </fieldset>
              <div style="margin-bottom: 40px;"></div>
              <button type="button" class="btn btn-primary" @click="creationCrypto">Créer </button>
             </form>
         </div>
</template>

<script>

import { store } from "../store.js";
import axios from 'axios'
export default {
  name: "CrytpoCreationForm",

  data() {
    return {
      dataStore: store,
      nom: "",
      valeur: 0,
      pseudoCreateur: "",
      idCreateur: 0,
      CryptoExiste: 0,

    };
  },

  methods: {

   async creationCrypto(){

    console.log(this.CryptoExiste);

await axios.get('https://apitokendustry.alwaysdata.net/cryptoExiste?libelle='+ 
      this.nom).then(
        response => {
          this.CryptoExiste = response.data[0].existe
          
        })

        if (this.CryptoExiste == 0) {
    await axios.get('https://apitokendustry.alwaysdata.net/idForPseudo?pseudonyme='+ 
      this.pseudoCreateur).then(
        response => {
          this.idCreateur = response.data[0].id
        })

    
        


await axios.post('https://apitokendustry.alwaysdata.net/createCrypto', {
  libelle: this.nom,
  valeur: this.valeur,
  createur: this.idCreateur,

})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});

alert("Crypto crée avec succès !");
this.$router.push('/')
}

else {

  alert("Deux Cryptos ne peuvent avoir le même nom !");


}
}



      

    
 
},
}
</script>
