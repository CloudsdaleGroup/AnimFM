<template>
    <section class="crstream">
            <ThePlayer />
    </section>
</template>

<style scoped>
.player{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    left: -12px;
    right: 12px;
}
</style>
<script>
// @ is an alias to /src
import ThePlayer from '@/components/ThePlayer.vue'

export default {
  name: 'popup',
  title: "AnimeFM - Popup",
    components: {
        ThePlayer
    },
}
</script>