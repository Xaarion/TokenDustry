<template>
  <div class="connexion-form">
    <h1>Connexion</h1>
    <form @submit.prevent="connekt">
      <fieldset>
        <div class="form-group">
          <label for="identifiant">Entrez votre identifiant</label>
          <input
            v-model="identif"
            type="text"
            class="form-control"
            id="identifiant"
            placeholder="Gabriel"
            required
          />
        </div>

        <div class="form-group">
          <label for="mdp">Entrez votre mot de passe</label>
          <input
            v-model="mdp"
            type="password"
            class="form-control"
            id="mdp"
            placeholder="********"
            required
          />
        </div>
      </fieldset>

      <div style="margin-bottom: 20px;"></div>

      <button type="submit" class="btn btn-primary">
        Connexion
      </button>

      <p v-if="erreur" class="text-danger mt-3">{{ erreur }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../store.js'
import axios from 'axios'
import { useRouter } from 'vue-router'

const identif = ref('')
const mdp = ref('')
const erreur = ref('')
const router = useRouter()

const connekt = async () => {
  erreur.value = ''
  try {
    const response = await axios.get('http://localhost:8080/utilisateurs/connexion', {
      params: {
        identif: identif.value,
        mdp: mdp.value
      }
    })

    const user = response.data

    store.data.id = user.id
    store.data.ident = user.identifiant
    store.data.acces = user.acces

    // Optionnel : récupérer les crédits via un second appel
    const creditsResponse = await axios.get(`http://localhost:8080/historique/solde/${user.id}`)
    store.data.credits = creditsResponse.data.credits || 0

    router.push('/HomeView')
  } catch (err) {
    console.error('Erreur de connexion', err)
    erreur.value = "Identifiants incorrects ou utilisateur introuvable"
  }
}
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>
