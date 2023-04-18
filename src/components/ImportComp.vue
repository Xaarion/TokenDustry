<template>
    


                  <div class="card-header">
                        <form class="form-inline">
                            <div class="form-group mb-2">
                                <label for="inputImport">Import</label>
                            </div>
                            <div class="form-group ml-2 mb-2">
                                <button class="btn btn-outline-primary" 
                                type="button" 
                                v-on:click="importJson()">JSON</button>
                            </div>
                        </form>
                    </div>


                    


               
</template>


<script>

import { store } from "../store.js";

export default {
  name: "ImportComp",

  props: {
    jsonFile: String,
  },

  data() {
    return {
      dataStore: store,
    };
  },

  methods: {

    importJson() {

        this.dataStore.data.sequence = JSON.parse(this.jsonFile)

        this.dataStore.data.nbrVm = this.dataStore.data.sequence.length
    }
  }
}
</script>
