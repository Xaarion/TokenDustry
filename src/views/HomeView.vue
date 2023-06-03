<template>
  <div class="row" style="margin-right: 0 !important">
    <div class="col-2" style="height: 800px; background-color: grey"></div>

    <div class="col-10" style="padding-right: 0 !important">

      <div v-for="currentcrypto in cryptos" :key="currentcrypto.id">

        <div class="row" style="margin-right: 0 !important">

          <CryptoLineInfo :crypto=currentcrypto></CryptoLineInfo>
            
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CryptoLineInfo from "@/components/CryptoLineInfo.vue";
import { store } from "../store.js";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    CryptoLineInfo,
  },

  data() {
    return {
      dataStore: store,
      cryptos: [],
    };
  },

  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/')}else{this.getCrypto();}
    
    //console.log(this.dataStore.data.credits)

  },

  methods: {
    async getCrypto() {
      await axios
        .get("https://apitokendustry.alwaysdata.net/crypto")
        .then((response) => {
          this.cryptos = response.data;
        });

      console.log(this.cryptos);


    },

  
  },
};
</script>
