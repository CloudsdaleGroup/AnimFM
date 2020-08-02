<template>
  <div id="app">  
    <!--<router-view/>-->
    <div>
      <center class="mt-4">
        <h1>Oops! Looks like we are going silent :/</h1>
        <p>
        Hi, I'm Asthriona, Founder and developper of AnimeFM. Due to recent change, we are avtually strugulling with servers.<br>
        We actually don't have any server to host our broadcaster and it music database. so sadly without broadcaster we are unable to cast any sounds.<br>
        are are actually in the process to find a place to host our broadcasting system and get back on air as soon as prossible.<br>
        We let you know on <a href="http://twitter.com/_AnimeFM" target="_blank" rel="noopener noreferrer">Twitter</a> and this website!<br>
        Please excuse us for the inconvenience
        </p>
        &mdash; AnimeFM Dev Team
      </center>
    </div>
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
