<template>
    SideMenu
</template> 

<script>

import { store } from "../store.js";
import axios from 'axios'

export default {
  name: "ExportComp",

  data() {
    return {
      dataStore: store,
      identif: "",
      mdp : "",
      valid: 0,
      acces: 0,
    };
  },

  methods: {
    async connekt(){

      this.dataStore.data.ident = this.identif;
      this.dataStore.data.mdp = this.mdp;

      await axios.get('https://apitokendustry.alwaysdata.net/connect?identif='+ this.identif + '&mdp=' + this.mdp).then(response => {this.valid = response.data[0].compteur, this.acces = response.data[0].acces, this.dataStore.data.id = response.data[0].id })


console.log("Le compte existe t'il ? (1 oui) (2 non)  --->  " + this.valid);


if(this.valid == 1){

  console.log("Et son Id ?  --->  " + this.dataStore.data.id);

console.log("Quel est son niveau d'accès ?  --->  " + this.acces);
  
this.dataStore.data.acces = this.acces

 this.$router.push('/HomeView')

}

else{console.log("Ce compte n'existe pas !")}
     

    },

  }
}
</script>
