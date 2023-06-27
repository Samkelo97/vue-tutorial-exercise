<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <formView/>
  </div>
</template>

<script>
// @ is an alias to /src
import formView from '@/components/formView.vue'

export default {
  name: 'HomeView',
  components: {
    formView
  }
}
</script>
