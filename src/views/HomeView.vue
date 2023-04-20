<template>
  <div class="home">
    <div class="contailer-fluid">

      <GlobalConfig />
      <div class="card mt-3">
      

      </div>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src




import GlobalConfig from '@/components/GlobalConfig.vue'
import { store } from "../store.js";



export default {
  name: 'HomeView',
  components: {
    GlobalConfig,

  },

  data() {
    return {
      dataStore: store,
    };
  },

  mounted() {

//verificationConnexion()
if(this.dataStore.data.acces != 1) {

this.$router.push('/')

}

},

  methods: {

    //verificationConnexion(){}

},

}

</script>
