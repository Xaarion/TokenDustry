<template>
  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;">Crypto : {{ crypto }}</div>
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;">Combien : {{ offre.montant }}</div>
<div class="col-2" style="font-size:35px; line-height: 80px; font-weight: bold;">Prix : {{ offre.prix }}</div>
<div class="col-3" style="font-size:30px; line-height: 80px; font-weight: bold;">Vendeur : {{ vendeur }}</div>
<div class="col-1" style="font-size:30px; line-height: 80px; font-weight: bold;"><button class="btn btn-primary" @click="achat">BUY</button></div>
  </div>
  <div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>
</template>

<script>

import { store } from "../store.js";
import axios from "axios";

export default {  
  name: "OffreInfoLine",

  props: {
    offre: Object,
  },

  data() {
    return {
    dataStore: store,
    vendeur: "",
     crypto: "",
     assezDeCredits: 0,
     id: 0,
     money:0,
     cryptoAcheteur: 0,
     assez : 0,
    };
  },

  mounted() {
  this.getCrypto();
  this.getCreateur();
  },

  methods: {
    
    

    async getCrypto() {



      await axios.get('https://apitokendustry.alwaysdata.net/cryptoLibForId?id='+ 
      this.offre.crypto).then(
        response => {
          this.crypto = response.data[0].libelle

        })
    },

    async achat() {

      this.assezDeCredits = 0;
      this.id = 0;
      this.money = 0;
      this.cryptoAcheteur= 0;
      this.assez = 1;

      await axios.get('https://apitokendustry.alwaysdata.net/connect?identif='+ 
      this.dataStore.data.ident+'&mdp='+this.dataStore.data.mdp).then(
        response => {
          this.id = response.data[0].id
        })


if(this.id == this.offre.vendeur){

  alert("Vous ne pouvez pas acheter vôtre propore offre !")
}

else{



  await axios.get('https://apitokendustry.alwaysdata.net/possedeAssezDeCredits?id='+ 
this.id+'&montant='+this.offre.prix).then(
  response => {
    this.assezDeCredits = response.data[0].possede
  })
console.log("Ai-je assez ? -> " + this.assezDeCredits)




if (this.assezDeCredits > 0){

  await axios.get('https://apitokendustry.alwaysdata.net/credits?id='+ 
this.id).then(
  response => {
    this.money = response.data[0].credits
  })


  await axios.post('https://apitokendustry.alwaysdata.net/changeBalance', {
      id: this.id,
      credits: (this.money - this.offre.prix)
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});



await axios.get('https://apitokendustry.alwaysdata.net/credits?id='+ 
this.offre.vendeur).then(
  response => {
    this.money = response.data[0].credits
  })


  await axios.post('https://apitokendustry.alwaysdata.net/changeBalance', {
      id: this.offre.vendeur,
      credits: (this.money + this.offre.prix)
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});



await axios.get('https://apitokendustry.alwaysdata.net/cryptoPossede?idUser='+this.id+'&idCrypto='+this.offre.crypto).then(
  response => {

    if (response.data.length > 0){
    this.cryptoAcheteur = response.data[0].quantite
    console.log("historique de crypto déja éxistant !")
  }

else {
  this.assez = 0;
  console.log("pas d'historique de crypto, création en cour...")
}})

if(this.assez > 0){

  console.log("incrémentations...")
  //console.log((this.cryptoAcheteur + this.offre.montant)+","+ this.cryptoAcheteur +","+this.montant)
  axios.put('https://apitokendustry.alwaysdata.net/crypTransaction/' + this.id, {
        quantite: (this.cryptoAcheteur + this.offre.montant),
        crypto: this.offre.crypto
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

}

else {

  await axios.post('https://apitokendustry.alwaysdata.net/createCryptoPossess', {
  id: this.id,
  id_Cryptomonnaies: this.offre.crypto,
  quantite: this.offre.montant,

})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});

}




alert("Achat effectué avec succès !");
  }

}}
,

    async getCreateur () {
      await axios.get('https://apitokendustry.alwaysdata.net/userForId?idUser='+ 
      this.offre.vendeur).then(
        response => {
          this.vendeur = response.data[0].pseudonyme
        })
      },



    

}
};
</script>


