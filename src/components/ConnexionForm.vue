<template>
  <div class="">
    <h1>Connexion</h1>
    <form>
      <fieldset>
        <div class="form-group">
          <label for="nom">Entrez votre Identifiant</label>
          <input
            type="text"
            class="form-control"
            id="nom"
            placeholder="Gabriel"
            v-model="identif"
          />
        </div>

        <div class="form-group">
          <label for="mdp">Entrez votre mot de passe</label>
          <input
            type="password"
            class="form-control"
            id="mdp"
            placeholder="Bokoblin256+*"
            v-model="mdp"
          />
        </div>
      </fieldset>
      <div style="margin-bottom: 40px"></div>
      <button type="button" class="btn btn-primary" @click="connekt">
        Connexion
      </button>
    </form>
  </div>
</template> 

<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  name: "ExportComp",

  data() {
    return {
      dataStore: store,
      identif: "",
      mdp: "",
      valid: 0,
      acces: 0,
    };
  },

  methods: {
    async connekt() {
      this.dataStore.data.ident = this.identif;
      this.dataStore.data.mdp = this.mdp;

      const response = await axios
        .get(
          "https://apitokendustry.alwaysdata.net/connect?identif=" +
            this.identif +
            "&mdp=" +
            this.mdp
        )
        this.valid = response.data[0].compteur
        this.acces = response.data[0].acces
        this.dataStore.data.id = response.data[0].id
      console.log(
        "Le compte existe t'il ? (1 oui) (2 non)  --->  " + this.valid
      );

      if (this.valid == 1) {
        console.log("Et son Id ?  --->  " + this.dataStore.data.id);

        console.log("Quel est son niveau d'accès ?  --->  " + this.acces);

      const resp2 = await axios
          .get(
            "https://apitokendustry.alwaysdata.net/credits?id=" +
              this.dataStore.data.id
          )

          console.log(resp2);

          this.dataStore.data.credits = resp2.data[0].credits;
            
         

        this.dataStore.data.acces = this.acces;

        this.$router.push("/HomeView");
      } else {
        console.log("Ce compte n'existe pas !");
      }
    },
  },
};
</script>
