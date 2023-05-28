<template>
<body>
    <div class="row">
    <div class="col-3"></div>    
    <div class="col-6">
       <ConnexionForm/>
    </div>
    <div class="col-3"></div>
</div>
</body>
</template>
      
<script>
// @ is an alias to /src



import ConnexionForm from '@/components/ConnexionForm.vue'
import { store } from "../store.js";



export default {
    name: 'ConnexionView',
    
    components: {
        ConnexionForm,

    },

    data(){

        return {
        dataStore: store,

    };
    },
    

    mounted() {
// if(this.dataStore.data.acces != 0) {this.$router.push('/HomeView')}
},
}
</script>
      