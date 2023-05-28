<template>
  <body>
  <div class="row">
    <div class="col-3"></div>    
    <div class="col-6">
    <CrytpoCreationForm/>
    </div>
    <div class="col-3"></div>
  </div>
</body>
       
</template>
          
    <script>
// @ is an alias to /src
import CrytpoCreationForm from "@/components/CrytpoCreationForm.vue";
import { store } from "../store.js";
import axios from "axios";


export default {
  name: "BackOfficeCreationCrypto",
  components: {
    CrytpoCreationForm,
  },
  data() {
    return {
      dataStore: store,
      cryptos: [],
      acces:0,
    };
  },

  mounted() {
    if(this.dataStore.data.acces < 3) {this.$router.push('/HomeView')}
    this.getCrypto();
    this.verifAdmin();
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
       

      await axios.get('https://apitokendustry.alwaysdata.net/connectID?identif='+ this.dataStore.data.ident + '&mdp=' + this.dataStore.data.mdp).then(response => {this.acces = response.data[0].acces})

 

      if(this.acces < 3){
        this.$router.push('/')

      }
      
    },
  },
};
</script>
          