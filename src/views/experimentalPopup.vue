<template>
    <div class="player">
        <div id="background" :style="{backgroundImage: 'url(\'' + meta.song.art + '\');'}">
        <h1>AnimeFM</h1>
        <hr>
        <iframe src="https://player.cloudsdalegroup.com/animefm" frameborder="0" scrolling="no" allowtransparency="true" style="width: 80%; min-height: 217px; border: 0;overflow-y: hidden;"></iframe>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import ThePlayer from '@/components/ThePlayer.vue'
import Axios from 'axios'

export default {
  name: 'popup',
  title: "AnimeFM - Popup",

        mounted: function(){
        Axios.get('https://broadcaster.animefm.co/api/nowplaying/3')
        .then((response)=>{
            this.meta = response.data.now_playing
        })
        var refreshMeta = this;
        setInterval(() => {
        Axios.get('https://broadcaster.animefm.co/api/nowplaying/3')
        .then((response)=>{
            this.meta = response.data.now_playing
        })
        }, 10000);
    },
    data: function(){
        return {
            meta: []
        }
    },
}
</script>