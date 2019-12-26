<template>
  <section>
  </section>
</template>
<script>
import Axios from 'axios'

export default {
    components: {
        
    },
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