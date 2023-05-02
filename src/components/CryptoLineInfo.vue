<template>
  <div class="row" style="height: 80px;">
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;">{{ crypto.libelle }}</div>
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;">Valeur : {{crypto.valeur}}</div>
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;"></div>
<div class="col-3" style="font-size:40px; line-height: 80px; font-weight: bold;">image</div>
  </div>
  <div class="row" style="height: 2px; background-color: red; margin-left: 0 !important;"></div>
</template>

<script>

import { store } from "../store.js";

export default {  
  name: "CryptoLineInfo",

  props: {
    crypto: Object,
  },

  data() {
    return {
      dataStore: store,
     
    };
  },

//   mounted() {
// console.log(this.wantedNbVm);
//   },

  

};
</script>


