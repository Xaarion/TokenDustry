<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col mt-3">
        <div class="card">
          <ImportComp v-bind:jsonFile="jsonToSend"/>
          <ImportCompText @jsonFile="recoisJson" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src

import ImportComp from "@/components/ImportComp.vue";
import ImportCompText from "@/components/ImportCompText.vue";

export default {
  name: "ImportView",
  components: {
    ImportComp,
    ImportCompText,
  },

  data() {
    return {
      jsonToSend: "",
    };
  },

  methods: {
    recoisJson(payload) {
      this.jsonToSend = payload.json;
    },
  },
};
</script>
  