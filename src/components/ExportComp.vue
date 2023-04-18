<template>
    <div class="card-header">
                        <form class="form-inline">
                            <div class="form-group mb-2">
                                <label for="inputExport">Export</label>
                            </div>
                            <div class="form-group ml-2 mb-2">
                                <button class="btn btn-outline-primary" type="button">JSON</button>
                            </div>
                        </form>
                    </div>
</template> 

<script>

import { store } from "../store.js";

export default {
  name: "ExportComp",

  data() {
    return {
      dataStore: store,
    };
  },

}
</script>
