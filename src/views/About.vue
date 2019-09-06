<template>
<section class="about">
  <div class="about">
  <TheNav />
        <h1 class="title">About us.</h1>
        <p class="station">
            AnimeFM is a WebRadio station project created in 2018 launch the 01/01/2020 by Cloudsdale Group. it's the successor of Cloudsdale Radio, a french brony WebRadio.
            Originaly started by Quentin "Sirius" Silva and Killian "Azmerhos" Patriowski, Quentin partially left Cloudsdale Radio in 2019 to focus on other project after 7 years of work.<br>
            The station is now managed by Asthriona, The Production Manager of Sirius Media Group, and Lead Developper of Cloudsdale Group.
            Originaly, Cloudsdale Radio was created as a challenge for Sirius, in 2012, the challenge was to create a fully functional webradio from scratch, and learn more about developement and server management.
            The station start with a single server, a little VPS and few song, and got a peack with 6 dedicated server to run all the 3 station with broadcaster, relay, and the website.
            After 8 years, They decide to close the station and create a new one, to follow the team moods.
            In 2018, They created CloudsdaleGroup, to regroup all the Cloudsdale Radio station and other webradio, like Sirius Radio And EquestriaFM.
            In 2019 EquestriaFM is shutting down to the benefit of Cloudsdale Radio, his Manager left Cloudsdale Group few month later to focus on his own project.
        </p>
        <p class="us">
          We are broadcasting 24/7 and are availiable everywhere in the world for free, all you need is a internet connection.<br>
          Our station broadcast Japanses Anime Music, Anime related music (remix, fan made, cover, etc...) and Japanse music.<br>
          We schedule Live show, every now and then, you can follow us on Twitter to be aware when live show and maintenance are planned!
        </p>
  </div>
  <div class="faq">
    <h1 class="faqtitle">Q&A</h1>
    <p class="qua">
      <b>What is AnimeFM?</b><br>
      AnimeFM is a free Webradio that broadcasting Anime & Japan related music 24/24 and 7/7<br>
      The station is developed by Cloudsdale Group.<br>
      <br><b>Why a changelogs and why there is "Cloudsdale Radio" Change logs here?</b><br>
      We like to see we are going foward with the station, AnimeFM is the direct successor of Cloudsdale Radio, it's like a Cloudsdale Radio 8.<br>
      Cloudsdale Radio was very poorly optimized and was asking for a lot of efforts to be updated. This change logs shows us that we are moving in the right direction.<br>
      <br><b>Do you have liv show?</b><br>
      Not for the moment. we looking for people would like to cast on our station regulary, but for now Asthriona have a yearly show for new year.<br>
      <br><b>Can I join the team as host?</b><br>
      Yes! if you had an idea for a show that fit in the station theme, please feel free to send us a e-mail at contact@CloudsdaleGroup.com ! we will take care of your request as soon as possible.<br>
      We are only asking for an exemple of the you you would like to produce on our station, and our producer will take care of the little edit you will had to do to fit perfectly with the station.<br>
      We usualy don't ask much changement and just validate your topics.
    </p>
  </div>
  <div class="privacy">
    <h1 class="title">Privacy</h1>
    <p>
      Cloudsdale Group and its associates do not collect any personal data.<br>
      In no case we know who you are, what you do in life, or what you like.
      However, for the proper functioning of the website and its infrastructure, we keep "logs" including your IP address and the links requested by your browser. This allows us to correct the site bugs and in case of attack on our infrastructure know where the attack comes from
      These logs are removed regularly by the servers at each start of services, they are restarted every week for maintenance.
    </p>
    <p class="separator"></p>
  </div>
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
<style scoped>
p {
  margin-left: 10%;
  margin-right: 10%;
  text-align: justify;
}
.separator {
  margin-bottom: 20px;
}
</style>