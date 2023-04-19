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
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { store } from "../store.js";

export default {
  name: "vmHeader",
  

  data() {
    return {
      dataStore: store,
      wantedNbVm: 0,
    };
  },

  mounted() {

    console.log(this.wantedNbVm);
  },

  

};
</script>


