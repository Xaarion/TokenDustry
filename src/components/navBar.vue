<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <span class="navbar-brand">Tokendustry</span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-if="user.acces < 1">
          <router-link to="/" class="nav-link">Connexion</router-link>
        </li>
        <li class="nav-item" v-if="user.acces < 1">
          <router-link to="/Inscription" class="nav-link">Inscription</router-link>
        </li>
        <li class="nav-item" v-if="user.acces >= 1">
          <router-link to="/HomeView" class="nav-link">Menu</router-link>
        </li>
        <li class="nav-item" v-if="user.acces >= 1">
          <router-link to="/CreationOffre" class="nav-link">Créer une Offre</router-link>
        </li>
        <li class="nav-item" v-if="user.acces >= 1">
          <router-link to="/OffreView" class="nav-link">Offres</router-link>
        </li>
        <li class="nav-item" v-if="user.acces >= 3">
          <router-link to="/BackOfficeCrypto" class="nav-link">BackOffice Crypto</router-link>
        </li>
        <li class="nav-item" v-if="user.acces >= 3">
          <router-link to="/BackOfficeCreationCrypto" class="nav-link">Créer Crypto</router-link>
        </li>
      </ul>
    </div>
    <span class="navbar-text me-3">
      Crédits : {{ user.credits }}
    </span>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '@/store.js'

// Accès direct aux données du store
const user = computed(() => store.data)
</script>

<style scoped>
.navbar-text {
  color: #fff;
  font-weight: bold;
}
</style>
