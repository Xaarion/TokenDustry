<template>
    <div class="row">
        <div class="col mt-3">
            <div class="card">

                <ExportComp />

                <ExportCompText />


            </div>
        </div>
    </div>
</template>
      
<script>
// @ is an alias to /src



import ExportComp from '@/components/ExportComp.vue'
import ExportCompText from '@/components/ExportCompTEXT.vue'



export default {
    name: 'ExportView',
    components: {
        ExportComp,
        ExportCompText
    }
}
</script>
      