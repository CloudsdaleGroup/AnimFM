<template >
    <div class="player">
        <div id="background" :style="{backgroundImage: 'url(\'' + meta.art + '\')', backgroundSize: cover, backgroundPosition: center, backgroundRepeat: no-repeat}">
        <hr>
        <iframe src="https://player.cloudsdalegroup.com/animefm" frameborder="0" scrolling="no" allowtransparency="true" style="width: 40%; min-height: 217px; border: 0;overflow-y: hidden;"></iframe>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'

export default {
    mounted: function(){
        Axios.get('https://api.asthriona.com/animefm/now')
        .then((response)=>{
            this.meta = response.data
        })
        var refreshMeta = this;
        setInterval(() => {
        Axios.get('https://api.asthriona.com/animefm/now')
        .then((response)=>{
            this.meta = response.data
        })
        .catch(function(errir){
            if(error.response){
                console.log(error.response.data)
            }
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
</style>