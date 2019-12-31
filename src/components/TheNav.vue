<template>
<div class="container">
  <div class="row">
    <section class="nav">
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="#"><a @click="openPopup">Popup</a></router-link> |
        <router-link to="#"><a @click="openPopupCR">Popup CR</a></router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/request">Song Request</router-link> |
        <router-link to="/staff">Staff</router-link>
    </div>
    <center>
    <img class="siteLogo" src="https://cdn.asthriona.com/logo%20animeFM.png" width="50%" alt="Site Logo">
    </center>
    <!--App not ready yet
      <div class="mobile d-block .d-md-none">
      <h2>You are using our website version, Feel free to download our android app!</h2>
    </div>-->
    </section>
    </div>  
</div>
</template>
<style scoped>
#nav {
    position: absolute;
    left: 0;
    right: 0;
    padding: 10px;
    margin-bottom: 2.4rem;
    background-color: black;
    /*box-shadow: 0px 0px 15px 10px rgb(0, 0, 0);*/
}

#nav a {
    font-weight: bold;
    color: #ffffff;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
.siteLogo {
    padding: 20px;
    margin-top: 30px;
}
</style>
<script>
import { mapState } from 'vuex'
computed: {
    mapState(['showTheNav'])
}
export default {
      methods: {
    openPopup () {
      window.open(
        '/popup/radio',
        'ThePlayer',
        'TheNav=no, scrollbars=no, width=559, height=330'
      )
    },
    openPopupCR () {
      window.open(
        '/popup/CloudsdaleRadio',
        'ThePlayer',
        'TheNav=no, scrollbars=no, width=559, height=330'
      )
    }
  }
}
</script>