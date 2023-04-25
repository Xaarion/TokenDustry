<template>
  <body>
  <div class="row">
    <div class="col-3"></div>    
    <div class="col-6">
    <IncsriptionForm/>
    </div>
    <div class="col-3"></div>
  </div>
</body>
       
</template>
  
  <script>
// @ is an alias to /src


import IncsriptionForm from "@/components/IncsriptionForm.vue";
import { store } from "../store.js";

export default {
  name: "InscriptionView",
  components: {
    IncsriptionForm,
  },

  data() {
    return {
      dataStore: store,
    };
  },

  methods: {
    recoisJson(payload) {
      this.jsonToSend = payload.json;
    },
  },
};
</script>
  