<template>
  <div class="home">
    <b-container fuild>
      <b-row>
    <TheNav />
    <b-col col md="6" sm="12">
    <ThePlayer />
    </b-col>
    <b-col col md="6" sm="12" class="d-none d-md-block">
    <ThePlayerCR />
    </b-col>
    <section class="youtube">
      <h2 class="title">YouTube Live Stream</h2>
       <!-- <b-col col md="12">
        <b-embed class="yt" type="iframe" aspect="16by9" src="https://www.youtube.com/embed/56A17bZyNWk" allowfullscreen></b-embed>
        </b-col>
        <b-col col md="12">
          <b-embed class="yt" type="iframe" aspect="16by9" src="https://www.youtube.com/embed/hEHpgI6jBJk" allowfullscreen></b-embed>
        </b-col>-->
        <!--Temp yt player-->
      <iframe class="none"      width="560" height="315" src="https://www.youtube.com/embed/hEHpgI6jBJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>AnimeFM</iframe>
      <iframe class="plyerLeft" width="560" height="315" src="https://www.youtube.com/embed/56A17bZyNWk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Cloudsdale Radio</iframe>
    </section>
    </b-row>
    </b-container>
  </div>
</template>

<style scoped>
    /*.playerCR {
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
    }*/
    .plyerLeft {
        position: relative;
        left: 10px !important;
    }
    .title {
      text-align: center;
    }
    .yt{
      height: 100%;
      width: 650px;
    }
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
        'TheNav=no, scrollbars=no, width=562, height=363'
      )
    },
  }
}
</script>
