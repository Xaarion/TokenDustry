<template>
  <div class="card-header">
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="inputNumberOfVM">Machines Virtuelles</label>
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <input
          type="number"
          class="form-control"
          id="inputNumberOfVM"
          placeholder="Nombre de VM"
          @change="changeInputVm($event)"
          v-bind:value="wantedNbVm"
        />
      </div>
    </form>
    <div class="card-body">
      <div class="card-columns">
        <div>
          <virtualMachinaVue 
          v-for="i in dataStore.data.sequence"
          
          :key="i.id"

          v-bind:nombredelavm="i.id"
          
          @majNbrVm="majVm"
          ></virtualMachinaVue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import virtualMachinaVue from "./virtualMachina.vue";
import { store } from "../store.js";

export default {
  name: "vmHeader",
  components: {
    virtualMachinaVue,
  },

  data() {
    return {
      dataStore: store,
      wantedNbVm: 0,
    };
  },

  mounted() {
    this.wantedNbVm = this.dataStore.data.sequence.length;
    console.log(this.wantedNbVm);
  },

  methods: {
    changeInputVm($event) {
      if ($event.target.value > 0) {
        this.dataStore.data.nbrVm = this.wantedNbVm;
        console.log($event.target.value);
        this.changeVM($event.target.value, this.wantedNbVm);
        this.wantedNbVm = $event.target.value;
      }
      else{
        this.dataStore.data.sequence = [];
      this.wantedNbVm = this.dataStore.data.sequence.length;
      }
    },

    changeVM(newNbVm, oldNbVm) {
      if (newNbVm > oldNbVm) {


        if (this.dataStore.data.sequence.length > 0) {
          this.dataStore.data.sequence.push({
            memoire: "",
            hDD: "",
            coeur: "",
            socket: "",
            id:
              this.dataStore.data.sequence[this.dataStore.data.sequence.length - 1].id + 1,
            
            memoireInput: false,
            HDDInput: false,
            CoeurInput: false,
            SocketInput: false,

          }); 



        } else {
          this.dataStore.data.sequence.push({          
            memoire: "",
            hDD: "",
            coeur: "",
            socket: "",
          id: this.dataStore.data.sequence.length,
            
            memoireInput: false,
            HDDInput: false,
            CoeurInput: false,
            SocketInput: false,

           
          });
        }
      } else {
        this.dataStore.data.sequence.splice(
          this.dataStore.data.sequence.length - 1,
          1
        );
      }
      //console.log("Nombre de VM :" + this.dataStore.data.sequence.length);

      //console.log("id vm max :" + this.dataStore.data.sequence[this.dataStore.data.sequence.length -1].id)
    },

    majVm() {
      this.dataStore.data.nbrVm = this.dataStore.data.sequence.length;
      this.wantedNbVm = this.dataStore.data.nbrVm;
      console.log("Augh");
    },
  },
};
</script>


