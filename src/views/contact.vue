<template>
    <section class="contact">
    <TheNav />
        <h1>CONTACT US.</h1>
        <p><b>How to contact us?</b><br>
        Sadly for now we don't have any fancy form for now. but you still can contact us by mail at <a href="mailto:contact@AnimeFM.co">Contact@animefm.co</a><br>
        or for legal information/delettion request <a href="mailto:legal@animefm.co">Legal@animeFM.co</a><br>
        <b>If you find any issue with the website</b> please create an <a href="https://github.com/CloudsdaleGroup/AnimFM/issues/new" target="_blank" rel="noopener noreferrer">issue</a> on GitHub.
        </p>
        <!--<i>Soon&#8482;</i>-->
    </section>
</template>
<script>
// @ is an alias to /src
import TheNav from '@/components/TheNav.vue'

export default {
  name: 'about',
    components: {
        TheNav
    },
}
</script>