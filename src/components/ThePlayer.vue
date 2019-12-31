<template >
    <div class="player">
        <div id="background" :style="{backgroundImage: 'url(\'' + meta.song.art + '\')'}">
        <h1>AnimeFM</h1>
        <hr>
        <iframe src="https://player.cloudsdalegroup.com/animefm" frameborder="0" scrolling="no" allowtransparency="true" style="width: 80%; min-height: 217px; border: 0;overflow-y: hidden;"></iframe>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'

export default {
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
    }

}
</script>
<style scoped>
    iframe {
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 0px 20px 2px rgba(255, 255, 255, 0.6);
        border-radius: 5px;
    }
    h1 {
        color: aliceblue;
        background: rgba(0, 0, 0, 0.6);
        margin-left: 15%;
        margin-right: 15%;
        border-radius: 10px;
    }
        /*.player {
        z-index: 1;
        margin-top: 3.3rem;
        padding-right: 10px;
        padding-top: 2rem;
        padding-bottom: 2rem;    
        z-index: 2;
        position: relative;
        left: 10px;
        width: 49%; 
        min-height: 100px;
        }}*/
        .background {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 100%;
        bottom: 0;
        }
        /*filter: blur(3px);
        z-index: -1;}*/
    

</style>