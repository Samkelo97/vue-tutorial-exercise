<template>
    <router-link :to="{name: 'tutorial', params:{id: tutorial.id}}">
        <img :src="tutorial.image_url" :alt="tutorial.title">

    <h3>
        {{ tutorial.title }}
    </h3>
    <p>Description: {{ tutorial.desc }}</p>
    <p>Price: R {{ tutorial.price }}</p>
        </router-link>
</template>
<script>
export default{
    props: ["tutorial"]
}
</script>