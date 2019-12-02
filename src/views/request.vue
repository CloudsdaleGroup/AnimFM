<template>
    <section class="request">
        <TheNav />
        <ThePlayer />
        <div class="request">
            <p>Request a song you want from our database! (1 per 15 minutes/IP)</p>
            <iframe src="http://broadcaster.animefm.co/public/animefm/embed-requests" frameborder="0" allowtransparency="true" style="width: 100%; min-height: 850px; border: 0;"></iframe>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import TheNav from '@/components/TheNav.vue'

export default {
  name: 'request',
    components: {
        TheNav
    },
}
</script>