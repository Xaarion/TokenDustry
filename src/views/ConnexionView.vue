<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <ConnexionForm />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ConnexionForm from '@/components/ConnexionForm.vue'
  import { store } from '../store.js'
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  onMounted(() => {
    if (store.data.acces !== 0) {
      router.push('/HomeView')
    }
  })
  </script>
  