<template>
  <div class="home-container">
    <div class="sidebar">

    </div>

    <div class="content">
      <div v-for="crypto in cryptos" :key="crypto.id" class="crypto-row">
        <CryptoLineInfo :crypto="crypto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '@/store.js'
import CryptoLineInfo from '@/components/CryptoLineInfo.vue'
import { getCryptos } from '@/API/crypto.js' 

const router = useRouter()
const cryptos = ref([])

const fetchCryptos = async () => {
  try {
    cryptos.value = await getCryptos()
    console.log('Cryptos chargés :', cryptos.value)
  } catch (error) {
    console.error('Erreur lors du chargement des cryptos :', error)
  }
}

onMounted(() => {
  if (store.data.acces < 1) {
    router.push('/')
  } else {
    fetchCryptos()
  }
})
</script>

<style scoped>
.home-container {
  display: flex;
}

.sidebar {
  width: 20%;
  height: 800px;
  background-color: grey;
}

.content {
  width: 80%;
  padding-right: 0;
}

.crypto-row {
  margin-right: 0;
}
</style>
