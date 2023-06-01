<template>
  <div class="row" style="margin-right: 0 !important">
    <div class="col-2" style="height: 800px; background-color: grey"></div>

    <div class="col-10" style="padding-right: 0 !important">

      <div v-for="currentoffre in offres" :key="currentoffre.id">

        <div class="row" style="margin-right: 0 !important">

          <OffreInfoLine :offre=currentoffre></OffreInfoLine>
            
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import OffreInfoLine from "@/components/OffreInfoLine.vue";
import { store } from "../store.js";
import axios from "axios";

export default {
  name: "OffreView",
  components: {
    OffreInfoLine,
  },

  data() {
    return {
      dataStore: store,
      offres: [],
    };
  },

  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/')}else{this.getOffres();}
    

  },

  methods: {
    async getOffres() {
      await axios
        .get("https://apitokendustry.alwaysdata.net/offres")
        .then((response) => {
          this.offres = response.data;
        });

      console.log(this.offres);
    },

  
  },
};
</script>
