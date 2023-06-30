<template>
 <div class="footer">
     <p class="footer-text-left">
            <routerlink class="menu" to="/">Home</routerlink>
            <routerlink class="menu" to="/About">About</routerlink>
            <routerlink class="menu" to="/Tutorials">Tutorials</routerlink>
            <routerlink class="menu" to="/Form">Form</routerlink>
     </p>
 </div>
</template>
<script>
export default{

}
</script>
<style scoped>

.footer{
    position:relative;
    background-color: black;
    width: 100%;
    text-align: center;
    height: 90px;
    color: white;
}
.footer-text-left {
    font-size:25px;
    padding-left:40px;
    word-spacing:20px;
    padding-inline: 50px;
    text-align: center;
    margin-left: 100px;
    gap: 100px;
}
.menu{
    padding:14px 20px;
}
.menu:hover{
    background-color:white;
    color:black;
    font-size:20px;


}
</style>