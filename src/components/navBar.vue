<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <span class="navbar-brand">Tokendustry</span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-if="user.acces <= 0">
          <router-link to="/" class="nav-link">Connexion</router-link>
        </li>
        <li class="nav-item" v-if="user.acces <= 0">
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
    <span class="navbar-text me-3" v-if="credits !== null">
      Crédits : {{ credits }}
    </span>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '@/store.js'
import { getUserCredits } from '@/API/historique.js'

const route = useRoute()
const user = computed(() => store.data)
const credits = ref(null)

const loadCredits = async () => {
  if (user.value.id) {
    try {
      const response = await getUserCredits(user.value.id)
      credits.value = response.credits ?? 0
    } catch (err) {
      console.error('Erreur lors du chargement des crédits :', err)
      credits.value = 0
    }
  }
}

// Recharge les crédits à chaque changement de route si l'utilisateur est connecté
watch(
  () => route.fullPath,
  async () => {
    if (user.value.acces >= 1) {
      await loadCredits()
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.navbar-text {
  color: #fff;
  font-weight: bold;
}
</style>
