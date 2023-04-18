<template>
  <div class="card bg-light">
    <div class="card-header">
      <div class="form-inline">
        <label>VM {{ nombredelavm + 1 }}</label>
        <button class="btn x-square-fill ml-auto" type="button" @click="sup(nombredelavm)"></button>
      </div>
    </div>
    <div class="card-body">
      <div class="form-group">
        <div v-if="dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].memoireInput">
        <label for="inputName">Mémoire</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="" aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1" v-model="memoirVm" />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button" @click="unselectOption('memoireInput')"></button>
          </div>
        </div>
        </div>
        <div v-if="dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].HDDInput">
        <label for="inputName">Taille HDD</label>
        <div class="input-group mb-3" >
          <input type="text" class="form-control" placeholder="" aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1" v-model="memoirTailleHDD" />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button" @click="unselectOption('HDDInput')"></button>
          </div>
        </div>
        </div>
        <div v-if="dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].CoeurInput">
        <label for="inputName">Coeur</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="" aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1" v-model="memoirCoeur" />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button" @click="unselectOption('CoeurInput')"></button>
          </div>
        </div>
        </div>
        <div v-if="dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].SocketInput">
        <label for="inputName">Socket</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="" aria-label="Exemple de texte avec un bouton Addon"
            aria-describedby="button-addon1" v-model="memoirSocket" />
          <div class="input-group-prepend">
            <button class="btn trash-fill" type="button" @click="unselectOption('SocketInput')"></button>
          </div>
        </div>
        </div>
      </div>
      <div class="form-row">
        <label for="inputEmail3">Nouveau Paramètre</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="selectedOption">
          <option value="memoireInput">Mémoire</option>
          <option value="HDDInput">Taille HDD</option>
          <option value="CoeurInput">Coeur</option>
          <option value="SocketInput">Socket</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "virtualMachina",
  props: {
    nombredelavm: Number,
  },

  data() {
    return {
      dataStore: store,
      memoirVm: "",
      memoirTailleHDD: "",
      memoirCoeur: "",
      memoirSocket: "",
      selectedOption: "",
    };
  },

  mounted() {

    const found = this.dataStore.data.sequence.find(element => element.id == this.nombredelavm);

    this.memoirVm = found.memoire;
    this.memoirTailleHDD = found.hDD;
    this.memoirCoeur = found.coeur;
    this.memoirSocket = found.socket;


  },



  watch: {
    memoirVm() {

      const found = this.dataStore.data.sequence.find(element => element.id == this.nombredelavm);

      found.memoire = this.memoirVm;

    },

    memoirTailleHDD() {

      const found = this.dataStore.data.sequence.find(element => element.id == this.nombredelavm);

      found.hDD = this.memoirTailleHDD;

    },
    memoirCoeur() {

      const found = this.dataStore.data.sequence.find(element => element.id == this.nombredelavm);

      found.coeur = this.memoirCoeur;

    },
    memoirSocket() {

      const found = this.dataStore.data.sequence.find(element => element.id == this.nombredelavm);

      found.socket = this.memoirSocket;

    },

    selectedOption(){

      console.log(this.selectedOption)

      switch (this.selectedOption) {

      case 'memoireInput':


      console.log(this.foundIndexId(this.nombredelavm))

      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].memoireInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].memoireInput = true
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].memoireInput)
      break;


      case 'HDDInput':


      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].HDDInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].HDDInput = true
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].HDDInput)
      break;


      case 'CoeurInput':


      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].CoeurInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].CoeurInput = true 
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].CoeurInput)
      break;


      case 'SocketInput':


      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].SocketInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].SocketInput = true
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].SocketInput)
      break;
      }

      
      
    }
    
    
  },

  methods: {

unselectOption (champ){

  console.log(champ)

      switch (champ) {

      case 'memoireInput':


      console.log(this.foundIndexId(this.nombredelavm))

      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].memoireInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].memoireInput = false
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].memoireInput)
      break;
      case 'HDDInput':


      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].HDDInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].HDDInput = false
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].HDDInput)
      break;
      case 'CoeurInput':


      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].CoeurInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].CoeurInput = false 
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].CoeurInput)
      break;
      case 'SocketInput':


      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].SocketInput)
      this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].SocketInput = false
      console.log(this.dataStore.data.sequence[this.foundIndexId(this.nombredelavm)].SocketInput)
      break;
      }

},
    sup(ccvm) {

      if (this.dataStore.data.sequence.length == 1) {
        this.dataStore.data.sequence = [];

      } else {
        console.log("Taille de la liste avant sup :" + this.dataStore.data.sequence.length);

        const found = this.dataStore.data.sequence.find(element => element.id == ccvm);

        const indexVmASup = this.dataStore.data.sequence.indexOf(found)

        this.dataStore.data.sequence.splice(indexVmASup, 1);

        console.log("Vm sup" + (ccvm + 1));

        //this.dataStore.data.nbrVm =  (this.dataStore.data.nbrVm - 1)

        console.log("Taille de la liste avant sup :" + this.dataStore.data.sequence.length);
      }
      this.$emit('majNbrVm')


    },



    foundIndexId(idDeLaVM) {

      const found = this.dataStore.data.sequence.find(element => element.id == idDeLaVM);

      const realIndex = this.dataStore.data.sequence.indexOf(found);

      return (realIndex);

    },



  },


};
</script>
