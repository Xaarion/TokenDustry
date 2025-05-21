<template>
  <div>
    <h1>Création d'offre</h1>
    <form @submit.prevent="handleCreateOffer">
      <fieldset>
        <div class="form-group">
          <label for="crypto">Crypto à vendre</label>
          <select
            id="crypto"
            class="form-control"
            v-model="selectedCryptoId"
            required
          >
            <option disabled value="">-- Choisissez une cryptomonnaie --</option>
            <option
              v-for="crypto in userCryptos"
              :key="crypto.id"
              :value="crypto.id"
            >
              {{ crypto.libelle }} ({{ crypto.quantite }} dispo)
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="amount">Quantité à vendre</label>
          <input
            type="number"
            id="amount"
            class="form-control"
            v-model.number="amount"
            min="0.0001"
            step="0.0001"
            required
          />
        </div>

        <div class="form-group">
          <label for="price">Prix unitaire</label>
          <input
            type="number"
            id="price"
            class="form-control"
            v-model.number="unitPrice"
            min="0.01"
            step="0.01"
            required
          />
        </div>
      </fieldset>

      <button type="submit" class="btn btn-primary mt-3" :disabled="isLoading">
        {{ isLoading ? "Création..." : "Créer" }}
      </button>

      <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '@/store.js';
import { createOffer } from '@/API/offres.js';
import { getCryptoById, subtractCrypto } from '@/API/crypto.js';
import { getUserCryptos } from '@/API/posseder.js';

const router = useRouter();

const userCryptos = ref([]);
const selectedCryptoId = ref('');
const amount = ref(0);
const unitPrice = ref(0);
const errorMessage = ref('');
const isLoading = ref(false);

onMounted(async () => {
  try {
    const cryptos = await getUserCryptos(store.data.id);
    userCryptos.value = cryptos.filter(c => c.quantite > 0);

    console.log(userCryptos)
  } catch (err) {
    console.error(err);
    errorMessage.value = "Impossible de charger les cryptomonnaies.";
  }
});

const handleCreateOffer = async () => {
  errorMessage.value = '';

  if (!selectedCryptoId.value || amount.value <= 0 || unitPrice.value <= 0) {
    errorMessage.value = 'Veuillez remplir correctement tous les champs.';
    return;
  }

  isLoading.value = true;

  try {
    const crypto = await getCryptoById(selectedCryptoId.value);
    if (!crypto?.id) {
      errorMessage.value = "Cryptomonnaie invalide.";
      return;
    }

    const userCrypto = userCryptos.value.find(c => c.id === selectedCryptoId.value);
    if (!userCrypto || amount.value > userCrypto.quantite) {
      errorMessage.value = "Quantité insuffisante.";
      return;
    }

    await subtractCrypto(store.data.id, crypto.id, amount.value);

    await createOffer({
  montant: amount.value,
  prix: unitPrice.value,
  utilisateur: { id: store.data.id },
  cryptomonnaie: { id: selectedCryptoId.value }
});



    alert("Offre créée avec succès !");
    router.push('/OffreView');
  } catch (err) {
    console.error(err);
    errorMessage.value = "Une erreur est survenue lors de la création de l'offre.";
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
