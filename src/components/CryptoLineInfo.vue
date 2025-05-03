<template>
  <div class="crypto-line">
    <div class="info">Nom : {{ crypto.libelle }}</div>
    <div class="info">Valeur : {{ valeur }}</div>
    <div class="info">Vous en possédez : {{ montant }}</div>
    
  </div>
  <div class="divider"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { store } from '@/store.js'
import { getUserCryptoAmount } from '@/API/posseder.js'
import { getvaleurCrypto } from '@/API/variations.js'


const props = defineProps({
  crypto: {
    type: Object,
    required: true,
  },
})

const montant = ref(0)
const valeur = ref(0)

const loadCryptoData = async () => {
  try {
    const responsePossede = await getUserCryptoAmount(store.data.id,props.crypto.id)
      montant.value = responsePossede.quantite
    const responseValeur = await getvaleurCrypto(props.crypto.id)
    valeur.value = responseValeur.valeur
  } catch (error) {
    console.error('Erreur lors du chargement des données de la crypto :', error)
  }
}

onMounted(loadCryptoData)
</script>

<style scoped>
.crypto-line {
  display: flex;
  align-items: center;
  height: 80px;
}

.info {
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  line-height: 80px;
  padding: 0 10px;
}

.divider {
  height: 2px;
  background-color: red;
  margin: 0;
}
</style>
