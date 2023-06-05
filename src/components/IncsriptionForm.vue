<template>
    <div class="">
             <h1>Inscription</h1>
             <form>
               <fieldset>
                 <div class="form-group">
                   <label for="identif">Entrez un identifiant</label>
                   <input type="text" class="form-control" id="identif" placeholder="Gabriel" v-model="identif">
                 </div>
                 
                 <div class="form-group">
                   <label for="password">Entrez un mot de passe</label>
                   <input type="password" class="form-control" id="email" placeholder="Bokoblin256+" v-model="mdp">
                 </div>

                 <div class="form-group">
                   <label for="pseudo">Entrez un nom pour votre compte (C'est celui ci que les gens verronts)</label>
                   <input type="text" class="form-control" id="pseudo" placeholder="Gabi" v-model="pseudo">
                 </div>       
                 
                 <div class="form-group">
                   <label for="email">Entrez votre adresse mail</label>
                   <input type="email" class="form-control" id="email" placeholder="Gabriel@gmail.com+" v-model="mail">
                 </div>       
                
              </fieldset>
              <div style="margin-bottom: 40px;"></div>
              <button type="button" class="btn btn-primary" @click="insc">Incription</button>
             </form>
         </div>
</template>

<script>

import { store } from "../store.js";
import axios from 'axios'
export default {
  name: "IncsriptionForm",

  data() {
    return {
      dataStore: store,
      identif: "",
      mdp: "",
      pseudo: "",
      mail: "",
      compteExiste : 0,
      id:0,
    };
  },

  methods: {

   async insc(){

    this.compteExiste = 0

    const response = await axios.get('https://apitokendustry.alwaysdata.net/antiDupliCompte?identif='+ this.identif + '&mail=' + this.mail)
      this.compteExiste = response.data[0].compteur
      console.log(response.data[0].compteur)


if (this.compteExiste < 1){


      const response2 = await axios.post('https://apitokendustry.alwaysdata.net/insc', {
      identif: this.identif,
      mdp: this.mdp,
      pseudo: this.pseudo,
      mail: this.mail
})

  console.log(response2.data);




  const response3 = await axios.get('https://apitokendustry.alwaysdata.net/connect?identif='+ 
      this.identif+'&mdp='+this.mdp)

          this.id = response3.data[0].id



        const response4 = await axios.post('https://apitokendustry.alwaysdata.net/changeBalance', {
      id: this.id,
      credits: 1000
})

  console.log(response4.data);





alert("Compte crée avec succès !");
this.$router.push('/')
}

else {

  alert("L'identifiant ou le mail entré est déja utilisé sur un autre compte.");

}


    },
 
},
}
</script>
