<template>
    <section class="crstream">
            <ThePlayer />
    </section>
</template>

<style scoped>
.player{
    position: relative;
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