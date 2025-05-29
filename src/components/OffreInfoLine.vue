<template>
  <div class="offer-line">
    <div class="col crypto">Crypto : {{ crypto?.libelle || '...' }}</div>
    <div class="col">Combien : {{ offre.montant }}</div>
    <div class="col">Prix : {{ offre.prix }}</div>
    <div class="col">Vendeur : {{ vendeurName || '...' }}</div>
    <div class="col btn-col">
      <button class="btn btn-primary" @click="handleBuy">BUY</button>
    </div>
  </div>
  <div class="separator"></div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { store } from '@/store.js';
import { effectuerAchat } from '@/API/offres.js';
import { getCryptoById } from '@/API/crypto.js';
import { getUserPseudoById } from '@/API/utilisateurs.js';

const props = defineProps({ offre: Object });
const emit = defineEmits(['achat-effectue']);

const crypto = ref(null);
const vendeurName = ref('');

watchEffect(async () => {
  const userId = props.offre?.utilisateur?.id;
  const cryptoId = props.offre?.cryptomonnaie?.id;

  if (!userId || !cryptoId) return;

  try {
    console.log("OFFRE REÇUE :", props.offre);
    const [vendeur, cryptoData] = await Promise.all([
      getUserPseudoById(userId),
      getCryptoById(cryptoId),
    ]);

    vendeurName.value = vendeur;
    crypto.value = cryptoData;
    console.log("PSEUDO =", vendeurName.value);
  } catch (e) {
    console.error("Erreur lors du chargement de l'offre :", e);
  }
});

const handleBuy = async () => {
  try {
    const result = await effectuerAchat(props.offre, store.data);
    if (result.success) {
      emit('achat-effectue');
      alert("Achat effectué avec succès !");
    } else {
      alert(result.message);
    }
  } catch (err) {
    console.error("Erreur lors de l'achat :", err);
    alert("Une erreur est survenue pendant l'achat.");
  }
};
</script>

<style scoped>
.offer-line {
  display: flex;
  align-items: center;
  height: 80px;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0 10px;
}

.col {
  flex: 1;
  line-height: 80px;
  padding: 0 10px;
}

.crypto {
  flex: 1.5;
}

.btn-col {
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.separator {
  height: 2px;
  background-color: red;
  margin: 0;
}
</style>
