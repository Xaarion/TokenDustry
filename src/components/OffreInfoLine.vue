<template>
  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:30px; line-height: 80px; font-weight: bold;">Crypto : {{ crypto }}</div>
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;">Combien : {{ offre.montant }}</div>
<div class="col-2" style="font-size:30px; line-height: 80px; font-weight: bold;">Prix : {{ offre.prix }}</div>
<div class="col-2" style="font-size:20px; line-height: 80px; font-weight: bold;">Vendeur : {{ vendeur }}</div>
<div class="col-2" style="font-size:30px; line-height: 80px; font-weight: bold;"><button class="btn btn-primary" @click="achat">BUY</button></div>
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

await axios.get('https://apitokendustry.alwaysdata.net/cryptoLibForId?id='+ 
this.offre.crypto).then(
  response => {
    this.crypto = response.data[0].libelle

  })
},

    async getCreateur () {
      await axios.get('https://apitokendustry.alwaysdata.net/userForId?idUser='+ 
      this.offre.vendeur).then(
        response => {
          this.vendeur = response.data[0].pseudonyme
        })
      }


    },


};
</script>


