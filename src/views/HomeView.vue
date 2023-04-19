<template>
  <div class="home">
    <div class="contailer-fluid">

      <GlobalConfig />
      <div class="card mt-3">
      

      </div>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src




import GlobalConfig from '@/components/GlobalConfig.vue'




export default {
  name: 'HomeView',
  components: {
    GlobalConfig,

  }
}
</script>
