<template>
  <div id="app">  
    <offline @detected-condition="handleConnectivityChange">
    <!-- Only renders when the device is online -->
    <div slot="online">
    </div>
    <!-- Only renders when the device is offline -->
    <div slot="offline" class="offline">
      <p>You appear to be offline :c</p>
    </div>
  </offline>
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
import offline from 'v-offline';

export default {
    components: {
    TheNav,
    offline,
    TheFooter
  }
}
</script>
