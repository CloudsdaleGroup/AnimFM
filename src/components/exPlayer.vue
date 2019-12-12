<template>
    <vue-audio :file="file" />
</template>

<script>
import VueAudio from 'vue-audio';
export default {
    data(){
        return {
            file: 'http://broadcaster.animefm.co:8020/radio.mp3'
        };
    },
    components: {
        'vue-audio': VueAudio
    }
}
</script>