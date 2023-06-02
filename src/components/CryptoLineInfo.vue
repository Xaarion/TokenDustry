<template>
  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:30px; line-height: 80px; font-weight: bold;">Nom : {{ crypto.libelle }}</div>
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;">Valeur : {{crypto.valeur}}</div>
<div class="col-3" style="font-size:30px; line-height: 80px; font-weight: bold;">Vous en possedez : {{montant}}</div>
<div class="col-3" style="font-size:30px; line-height: 80px; font-weight: bold;">Créateur : {{createur}}</div>
  </div>
  <div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>
</template>

<script>

import { store } from "../store.js";
import axios from "axios";

export default {  
  name: "CryptoLineInfo",

  props: {
    crypto: Object,
  },

  data() {
    return {
    dataStore: store,
     montant: 0,
     createur: "",
    };
  },

  mounted() {
  this.getCryptoPossede();
  this.getCreateur();
  },

  methods: {
    

    async getCryptoPossede() {

      await axios.get('https://apitokendustry.alwaysdata.net/cryptoPossede?idCrypto='+ 
      this.crypto.id + '&idUser=' + this.dataStore.data.id).then(
        response => {

          if (response.data.length > 0){
          console.log(response.data),
          this.montant = response.data[0].quantite, 
          console.log(response.data[0].quantite),
          console.log("Pas de Monnaie pour la crypto N°" + this.crypto.id)
        } 
        }
        )


    },


    async getCreateur () {
      await axios.get('https://apitokendustry.alwaysdata.net/userForId?idUser='+ 
      this.crypto.createur).then(
        response => {
          this.createur = response.data[0].pseudonyme
        })
      }


    },


};
</script>


