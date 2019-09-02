<template>
  <div class="home">
    <TheNav />
    <ThePlayer />
  </div>
</template>

<style scoped>
    .player {
        margin-top: 4.3rem;
        padding-top: 2rem;
        padding-bottom: 2rem;    
        z-index: 2;
        position: relative;
        left: 12%;
        background-image: url(https://cdn.asthriona.com/BeFunky-photo.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 75%; 
        min-height: 100px;
    }
</style>

<script>
// @ is an alias to /src
import ThePlayer from '@/components/ThePlayer.vue'
import TheNav from '@/components/TheNav.vue'

export default {
  name: 'home',
  components: {
    ThePlayer,
    TheNav
  },
  methods: {
    openPopup () {
      window.open(
        '/popup/radio',
        'ThePlayer',
        'TheNav=no, scrollbars=no, width=720, height=154'
      )
    },
  }
}
</script>
