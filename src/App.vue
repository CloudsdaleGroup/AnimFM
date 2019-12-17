<template>
  <div id="app">  
    <router-view/>
  <!--<TheFooter />-->
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.offline {
  background: red;
  color: white;
}
</style>
<script>
import axios from 'axios';
import TheNav from '@/components/TheNav.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
    components: {
    TheNav,
    TheFooter
  }
}
</script>
