<template>

<button class="btn trash-fill" type="button" @click="bringData()"></button>
<button type="button" @click="showData()">AHHHH</button>

<div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>

</template>

<script>
// @ is an alias to /src





import { store } from "../store.js";
import axios from 'axios'



export default {
  name: 'HomeView',
 

  data() {
    return {
      dataStore: store,
      users: [],
    };
  },

  mounted() {

//verificationConnexion()
// if(this.dataStore.data.acces != 1) {

// this.$router.push('/')
// }


},

  methods: {

    bringData(){

axios.get('https://apitokendustry.alwaysdata.net/users').then(response => {this.users = response})

      

    },

    showData(){
console.log(this.users)
    }

},

}

</script>
