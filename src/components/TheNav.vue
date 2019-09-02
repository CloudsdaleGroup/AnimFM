<template>
    <section class="nav">
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="#"><a @click="openPopup">Popup</a></router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/request">Song Request</router-link> |
        <router-link to="/staff">Staff</router-link>
    </div>
    <img class="siteLogo" src="https://cdn.siriushd.net/logo%20animeFM.png" width="50%" alt="Site Logo">
    </section>
</template>
<style scoped>
#nav {
    padding: 10px;
    background-color: black;
    box-shadow: 0px 0px 15px 10px rgb(0, 0, 0);
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
        'TheNav=no, scrollbars=no, width=720, height=154'
      )
    }
  }
}
</script>