<template>
  <body>
  <div class="row">
    <div class="col-3"></div>    
    <div class="col-6">
    <OffreCreationForm/>
    </div>
    <div class="col-3"></div>
  </div>
</body>
       
</template>
          
    <script>
// @ is an alias to /src
import OffreCreationForm from "@/components/OffreCreationForm.vue";
import { store } from "../store.js";



export default {
  name: "CreationOffre",
  components: {
    OffreCreationForm,
  },
  data() {
    return {
      dataStore: store,
      acces:0,   
    };
  },

  mounted() {
    if(this.dataStore.data.acces < 1) {this.$router.push('/HomeView')}

  },

  methods: {
    
  },
};
</script>
          