<template>
  <div class="offres-view">
    <div class="sidebar">
            <label class="form-check-label text-white mx-2">
  <input type="checkbox" v-model="afficherMesOffres" class="form-check-input" />
  Voir mes offres
</label>
    </div>
    <main class="content">
      <div v-if="loading" class="loading">Chargement...</div>
      <div v-else>
        <OffreInfoLine
          v-for="offre in offres"
          :key="offre.id"
          :offre="offre"
          @achat-effectue="chargerOffres"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch, onMounted  } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '@/store.js';
import OffreInfoLine from '@/components/OffreInfoLine.vue';
import { getAllOffres } from '@/API/offres.js';

const router = useRouter();
const offres = ref([]);
const loading = ref(true);
const afficherMesOffres = ref(false);

watch(afficherMesOffres, (val) => {
  store.data.afficherMesOffres = val;
});

const chargerOffres = async () => {
  loading.value = true;

  try {
    const data = await getAllOffres();

    if (!Array.isArray(data)) {
      console.warn("Les données reçues ne sont pas un tableau :", data);
      return;
    }

    const filtered = afficherMesOffres.value
      ? data
      : data.filter(offre => offre.utilisateur.id !== store.data.id);

    offres.value = filtered;

  } catch (e) {
    console.error("Erreur lors du chargement des offres :", e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (store.data.acces < 1) {
    router.push('/');
    return;
  }

  watch(() => afficherMesOffres.value, () => {
    chargerOffres();
  });

  // Charge une première fois
  chargerOffres();
});
</script>

<style scoped>
.offres-view {
  display: flex;
}
.sidebar {
  width: 16.6666%; /* col-2 */
  background-color: grey;
  height: 100vh;
}
.content {
  width: 83.3333%; /* col-10 */
  padding-right: 0;
}
.loading {
  padding: 2rem;
  text-align: center;
  font-weight: bold;
}
</style>
