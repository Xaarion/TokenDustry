<template>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
  <navBar/>
  <router-view/>
</template>



<script>

import navBar from '@/components/navBar.vue'

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>