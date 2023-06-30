<template>
    <nav class="topnav">
        <router-link class="active" to="/">Home</router-link>
        <router-link class="active" to="/tutorials">Tutorials</router-link>
        <router-link class="active" to="/about">About</router-link>
        <router-link class="active" to="/form">Form</router-link>
    </nav>
</template>
<script>

export default{

}
</script>
<style scoped>
.topnav{
    background-color: black;
    overflow: hidden;
    text-align: center;
    padding-bottom: 30px;
}
.active{
    float: center;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    font-size: 25px;
   

}
.active:hover{
    background-color: white;
    color: black;
    font-size: 20px;
}

</style>