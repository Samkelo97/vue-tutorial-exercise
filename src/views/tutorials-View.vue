<template>
    <div v-if="tutorials" class="flex-container">
    <CardComp v-for="tutorial of tutorials" :key="tutorial.id" :tutorial="tutorial" />
    </div>
    <div v-else>loading..</div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default{
    computed: {

        tutorials() {
            return this.$store.state.tutorials
        }
    },
    mounted(){
        return this.$store.dispatch("getTutorials")
    },
    components:{CardComp}
}
</script>