<template>

    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <span class="navbar-brand">Tokendustry</span>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">z
                    <li class="nav-item">
                      <router-link to="/" class="nav-link" v-if="dataStore.data.acces < 1 ">Connexion</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/Inscription" class="nav-link" v-if="dataStore.data.acces < 1 ">Inscription</router-link>

                    </li>

                    <li class="nav-item">
                      <router-link to="/HomeView" class="nav-link" v-if="dataStore.data.acces >= 1 ">Menu</router-link>
             
                    </li>
                    
                    <li class="nav-item">
                      <router-link to="/CreationOffre" class="nav-link" v-if="dataStore.data.acces >= 1 ">CreationOffre</router-link>
             
                    </li>

                    <li class="nav-item">
                      <router-link to="/OffreView" class="nav-link" v-if="dataStore.data.acces >= 1 ">Offres</router-link>
             
                    </li>

                    <li class="nav-item">
                      <router-link to="/BackOfficeCrypto" class="nav-link" v-if="dataStore.data.acces >= 3 ">BackOfficeCrypto</router-link>
             
                    </li>
                    <li class="nav-item">
                      <router-link to="/BackOfficeCreationCrypto" class="nav-link" v-if="dataStore.data.acces >= 3 ">BackOfficeCreationCrypto</router-link>
             
                    </li>

                    
                    
                </ul>
               
            </div> 
            
            <span class="navbar-text" style="margin-right: 50px;">
                      
                      Crédits : {{ dataStore.data.credits }}
             
                    </span>
        </nav>
        
  </template>
  <style>

.trash-fill:before {
  content: url("data:image/svg+xml,<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z'/></svg>");
  width: 5px;
  float: center;
  margin-right: 0px;
  margin-top: 0px;
}

.x-square-fill:before {
  content: url("data:image/svg+xml,<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-x-square-fill' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'/></svg>");
  width: 5px;
  float: center;
  margin-right: 0px;
  margin-top: 0px;
}

@media (min-width: 576px) {
  .card-columns {
      column-count: 1;
 }
}
@media (min-width: 700px) {
  .card-columns {
      column-count: 2;
 }
}
@media (min-width: 1200px) {
  .card-columns {
      column-count: 3;
 }
}
@media (min-width: 1600px) {
  .card-columns {
      column-count: 4;
 }
}
    </style>

    <script>

    import { store } from "../store.js";
    
    export default {
      name: "navBar",
      
    
      data() {
        return {
          dataStore: store,
        };
      },
 
    };
    </script>
    
    
    
  