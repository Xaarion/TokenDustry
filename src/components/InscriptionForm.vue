<template>
  <div class="inscription-form">
    <h1>Inscription</h1>
    <form @submit.prevent="insc">
      <fieldset>
        <div class="form-group">
          <label for="identif">Identifiant</label>
          <input type="text" id="identif" class="form-control" v-model="identif" required />
        </div>

        <div class="form-group">
          <label for="mdp">Mot de passe</label>
          <input type="password" id="mdp" class="form-control" v-model="mdp" required />
        </div>

        <div class="form-group">
          <label for="pseudo">Nom de profil</label>
          <input type="text" id="pseudo" class="form-control" v-model="pseudo" required />
        </div>

        <div class="form-group">
          <label for="mail">Email</label>
          <input type="email" id="mail" class="form-control" v-model="mail" required />
        </div>
      </fieldset>

      <div class="form-group mt-3">
        <button type="submit" class="btn btn-primary">Créer mon compte</button>
      </div>

      <p v-if="erreur" class="text-danger mt-2">{{ erreur }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '@/store.js';
import { checkIfUserExists, createUser, loginUser } from '@/API/utilisateurs.js';


const identif = ref('');
const mdp = ref('');
const pseudo = ref('');
const mail = ref('');
const erreur = ref('');
const router = useRouter();

const insc = async () => {
  erreur.value = '';

  try {
    const exists = await checkIfUserExists(mail.value, identif.value);

if (exists === true) {
  erreur.value = "L'email ou l'identifiant est déjà utilisé.";
  return;
}

await createUser({
  identifiant: identif.value,
  password: mdp.value,
  mail: mail.value,
  pseudonyme: pseudo.value
});

    console.log("CA A BIEN CRÉE")
    const user = await loginUser(identif.value, mdp.value);
    store.data.id = user.id;
    store.data.ident = user.identifiant;
    store.data.acces = user.acces;

    console.log("CA A BIEN LOG")

    alert("Compte créé avec succès !");
    router.push('/');
  } catch (err) {
    console.error(err);
    erreur.value = "Une erreur est survenue lors de l'inscription.";
  }
};
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>
