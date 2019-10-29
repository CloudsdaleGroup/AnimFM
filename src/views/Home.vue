<template>
  <div class="home">
    <div class="container">
      <div class="row">
    <TheNav />
    <ThePlayerCR />
    <ThePlayer />
    <section class="youtube">
      <h2 class="title">YouTube Live Stream</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/56A17bZyNWk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Cloudsdale Radio</iframe>
      <iframe class="plyerLeft" width="560" height="315" src="https://www.youtube.com/embed/hEHpgI6jBJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>AnimeFM</iframe>
    </section>
    </div>
    </div>
  </div>
</template>

<style scoped>
    .playerCR {
        margin-top: 3.3rem;
        padding-top: 2rem;
        padding-bottom: 2rem;    
        z-index: 2;
        position: relative;
        background-image: url(https://cdn.cloudsdalegroup.com/site/cr/CRbackground.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 49%; 
        min-height: 100px;
    }
    .player {
        margin-top: 3.3rem;
        padding-right: 10px;
        padding-top: 2rem;
        padding-bottom: 2rem;    
        z-index: 2;
        position: relative;
        left: 10px;
        background-image: url(https://cdn.asthriona.com/BeFunky-photo.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 49%; 
        min-height: 100px;
    }
    .plyerLeft {
        position: relative;
        left: 10px !important;
    }
</style>
<style>
::-webkit-scrollbar {
display: none;
}
</style>

<script>
// @ is an alias to /src
import ThePlayer from '@/components/ThePlayer.vue'
import ThePlayerCR from '@/components/ThePlayerCR.vue'
import TheNav from '@/components/TheNav.vue'

export default {
  name: 'home',
  components: {
    ThePlayerCR,
    ThePlayer,
    TheNav
  },
  methods: {
    openPopup () {
      window.open(
        '/popup/radio',
        'ThePlayer',
        'TheNav=no, scrollbars=no, width=720, height=261'
      )
    },
  }
}
</script>
