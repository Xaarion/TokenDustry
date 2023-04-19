<template>
<body>
    <div class="row">
    <div class="col-3"></div>    
    <div class="col-6">
       <ExportComp/>
    </div>
    <div class="col-3"></div>
</div>
</body>
</template>
      
<script>
// @ is an alias to /src



import ExportComp from '@/components/ExportComp.vue'




export default {
    name: 'ConnexionView',
    components: {
        ExportComp,

    }
}
</script>
      