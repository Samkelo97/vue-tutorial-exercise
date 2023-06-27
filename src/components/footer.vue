<template>
 <div class="footer">
        <h6>Footer</h6>
     <p class="footer-text-left">
            <routerlink class="menu" to="/"></routerlink>
            <routerlink class="menu" to="/"></routerlink>
            <routerlink class="menu" to="/"></routerlink>
     </p>
 </div>
</template>
<script>
export default{

}
</script>
<style scoped>

.footer{
    position:fixed;
    bottom:0;
    left: 0;
    background-color: chocolate;
    width: 100%;
    text-align: center;
    height: 0%;

}
.footer-text-left {
    font-size:25px;
    padding-left:40px;
    float: left;
    word-spacing:20px;
}
.menu:hover{
    background-color:yellowgreen;
    font-size:20px;
}
</style>