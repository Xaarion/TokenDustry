<template>
<div class="row" style="margin-right: 0 !important">
    <div class="col-2" style="height: 800px; background-color: grey"></div>

    <div class="col-10" style="padding-right: 0 !important">

      <div v-for="currentcrypto in cryptos" :key="currentcrypto.id">

        <div class="row" style="margin-right: 0 !important">

          <CrytpoModif :crypto=currentcrypto></CrytpoModif>
            
        </div>
        
      </div>

    </div>
  </div>
</template>
          
    <script>
// @ is an alias to /src
import CrytpoModif from "@/components/CrytpoModif.vue";
import { store } from "../store.js";
import axios from "axios";


export default {
  name: "BackOfficeCrypto",
  components: {
    CrytpoModif,
  },
  data() {
    return {
      dataStore: store,
      cryptos: [],
      acces:0,
    };
  },

mounted() {

  this.verifAdmin();
  this.getCrypto();

},

  methods: {
    async getCrypto() {
      await axios
        .get("https://apitokendustry.alwaysdata.net/crypto")
        .then((response) => {
          this.cryptos = response.data;
        });


    },

    async verifAdmin() {

      console.log("bouh")
            console.log(this.acces)
  
      await axios.get('https://apitokendustry.alwaysdata.net/connect?identif='+ this.dataStore.data.ident + '&mdp=' + this.dataStore.data.mdp).then(response => {this.acces = response.data[0].acces})

      console.log(this.acces)

      if( this.acces < 3){
        this.$router.push('/HomeView')

      }
      
    },
  },
}
</script>
          