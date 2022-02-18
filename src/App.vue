<template>
  <router-view />
  <div class="container fluid"></div>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    Footer
  }
}

</script>

<style>
body{
  background: url(assets/background.png);
  background-color: #171717;
  
  
}
</style>
