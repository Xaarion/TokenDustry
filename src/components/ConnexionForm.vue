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

      <button type="submit" class="btn btn-primary" :disabled="isLoading">
        {{ isLoading ? "Connexion..." : "Connexion" }}
      </button>

      <p v-if="erreur" class="text-danger mt-3">{{ erreur }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { store } from '../store.js';
import { useRouter } from 'vue-router';
import { loginUser, getUserCredits } from '@/API/authentification.js'; // Utilisation de ton API propre

const identif = ref('');
const mdp = ref('');
const erreur = ref('');
const isLoading = ref(false);
const router = useRouter();

const connekt = async () => {
  erreur.value = '';

  // Vérification manuelle des champs
  if (!identif.value || !mdp.value) {
    erreur.value = 'Veuillez remplir tous les champs.';
    return;
  }

  isLoading.value = true;
  try {
    const user = await loginUser(identif.value, mdp.value);

    store.data.id = user.id;
    store.data.ident = user.identifiant;
    store.data.acces = user.acces;

    if (store.data.acces < 1) {
      erreur.value = "Vous n'avez pas les permissions nécessaires.";
      return;
    }

    const creditsData = await getUserCredits(user.id);
    store.data.credits = creditsData.credits || 0;

    router.push('/HomeView');
  } catch (err) {
    console.error('Erreur de connexion', err);
    erreur.value = "Identifiants incorrects ou utilisateur introuvable.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>
