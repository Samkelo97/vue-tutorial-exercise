<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import FooterComp from './components/footer.vue';
import NavbarComp from './components/navbar.vue';

export default{
  components:{NavbarComp,FooterComp}
}
</script>
