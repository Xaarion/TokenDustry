<template>
    <div class="">
             <h1>Création d'offre</h1>
             <form>
               <fieldset>
                 
                 <div class="form-group">
                   <label for="password">Entrez la Crypto a vendre</label>
                   <input type="text" class="form-control" id="email" placeholder="Nom exact de la crypto" v-model="cryptoLibelle">
                 </div>

                 <div class="form-group">
                   <label for="pseudo">Entrez le nombre de cypto a vendre ?</label>
                   <input type="number" class="form-control" id="pseudo" placeholder="Montant" v-model="montant">
                 </div>       
                 
                 <div class="form-group">
                   <label for="pseudo">Entrez le prix</label>
                   <input type="number" class="form-control" id="pseudo" placeholder="prix" v-model="prixUnitaire">
                 </div>       
                
              </fieldset>
              <div style="margin-bottom: 40px;"></div>
              <button type="button" class="btn btn-primary" @click="creationOffre">Créer </button>
             </form>
         </div>
</template>

<script>

import { store } from "../store.js";
import axios from 'axios';

export default {
  name: "CrytpoCreationForm",

  data() {
    return {
      dataStore: store,
      id: 0,
      crypto: 0,
      cryptoLibelle:"",
      montant: "",
      prixUnitaire: "",
      possede: 0,
      cryptoExiste: 0,
      combienCrypto: 0,
    };
  },

  methods: {

   async creationOffre(){
    this.combienCrypto =0;
    this.possede = 0;
    this.cryptoExiste = 0;
    
 const response = await axios.get('https://apitokendustry.alwaysdata.net/connect?identif='+ 
      this.dataStore.data.ident+'&mdp='+this.dataStore.data.mdp)
   
          this.id = response.data[0].id



        await axios.get('https://apitokendustry.alwaysdata.net/cryptoIdForLib?lib='+this.cryptoLibelle).then(
        response => {
          if(response.data.length != 0){
          this.crypto = response.data[0].id}
          else{alert("Cette Crypto n'existe pas ");}
      
          this.cryptoExiste = response.data.length 
        })

        if(this.cryptoExiste != 0){
        await axios.get('https://apitokendustry.alwaysdata.net/peutVendreCrypto?id='+ 
        this.id + 
        '&idCrypto=' + this.crypto+ 
        '&montant=' + this.montant
        ).then(
      response => {this.possede = response.data[0].possede
      console.log(response.data[0].possede)
      this.combienCrypto = response.data[0].quantite})
  
    if (this.possede > 0) {

      axios.put('https://apitokendustry.alwaysdata.net/crypTransaction/' + this.id, {
        quantite: (this.combienCrypto - this.montant),
        crypto: this.crypto
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

await axios.post('https://apitokendustry.alwaysdata.net/createOffre', {
  vendeur: this.id,
  crypto: this.crypto,
  montant: this.montant,
  prixUnitaire: this.prixUnitaire,

})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});

alert("Offre crée avec succès !");
this.$router.push('/OffreView')
}


else{

  alert("Vous ne possedez pas assez Crypto");

}
}
},

},
}
</script>
