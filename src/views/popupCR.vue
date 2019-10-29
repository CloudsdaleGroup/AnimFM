<template>
    <section class="crstream">
        <ThePlayer />
    </section>
</template>
<style scoped>
    .crstream {
        background-image: url(https://cdn.cloudsdalegroup.com/site/cr/CRbackground.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }
</style>
<script>
// @ is an alias to /src
import ThePlayer from '@/components/ThePlayerCR.vue'

export default {
  name: 'popup',
  title: "CloudsdaleRadio - Popup",
    components: {
        ThePlayer
    },
}
</script>