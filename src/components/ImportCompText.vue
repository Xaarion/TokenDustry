<template>
    <div class="card-body">
                        <textarea class="form-control" 
                        id="inputInport" rows="25" 
                        v-model="jsonVmImport" 
                        @change="exportLImport(this.jsonVmImport)"></textarea>
                    </div>
</template>

<script>

import { store } from "../store.js";

export default {
  name: "ImportCompTEXT",

  data() {
    return {
      dataStore: store,
      jsonVmImport: "",
    };
  },

  methods: {
  exportLImport(fichierJsonImport) {
    console.log("gogo")

    this.$emit('jsonFile', {json: fichierJsonImport});
    
  }
},
}
</script>
