<template>
    <section class="crstream">
        <ThePlayer />
    </section>
</template>
<style scoped>
    .crstream {
        background-image: url(https://cdn.asthriona.com/BeFunky-photo.jpg);
        background-repeat: no-repeat;
        background-size: cover;
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