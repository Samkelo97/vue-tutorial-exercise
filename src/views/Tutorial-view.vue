<template>
    <div v-if="tutorial" class="tutorial-details">
        <img :src="tutorial.image_url" :alt="tutorial.title">
        <div>
            <h2>{{ tutorial.title }}</h2>
            <p>Description: {{ tutorial.desc }}</p>
            <p>Rating: {{ tutorial.rating }}</p>
        </div>
    </div>
</template>
<script>
export default{
    props:["id"],

    computed:{
        tutorial(){
            return this.$store.state.tutorial
        },
    },
    
    mounted(){
        this.$store.dispatch("getTutorial",this.id)
    }
}
</script>