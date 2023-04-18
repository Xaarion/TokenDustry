<template>
    <div class="card-body">
                        <textarea class="form-control" id="inputExport" rows="25" v-model="jsonVmText"></textarea>
                    </div>
</template>


<script>

import { store } from "../store.js";

export default {
  name: "ExportCompTEXT",

  data() {
    return {
      dataStore: store,
      jsonVmText: String,
    };
  },

  mounted() {

this.jsonVmText = JSON.stringify(this.dataStore.data.sequence);

  }

}
</script>
