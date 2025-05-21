<template>
  <div class="container mt-5">
    <OffreCreationForm />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '@/store.js';
import OffreCreationForm from '@/components/OffreCreationForm.vue';

const router = useRouter();

onMounted(() => {
  if (store.data.acces < 1) {
    router.push('/HomeView');
  }
});
</script>
