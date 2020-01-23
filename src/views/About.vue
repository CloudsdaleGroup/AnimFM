<template>
<section class="about">
  <div class="about">
  <TheNav />
        <h1 class="title">About us.</h1>
        <p class="station">
            AnimeFM is a WebRadio project created in 2018 launch the 01/01/2020 by <a href="http://cloudsdalegroup.com" target="_blank" rel="noopener noreferrer">CloudsdaleGroup</a>. it's the successor of Cloudsdale Radio, a french brony WebRadio.
            Originaly started by <a href="https://twitter.com/Sirius242" target="_blank" rel="noopener noreferrer">Quentin "Sirius" Silva</a> and <a href="https://twitter.com/azmerhos" target="_blank" rel="noopener noreferrer">Killian "Azmerhos" Patriowski</a>, Quentin partially left Cloudsdale Radio in 2019 to focus on other project after 7 years of work.<br>
            The station is now managed by <a href="https://twitter.com/Asthriona" target="_blank" rel="noopener noreferrer">Asthriona</a>, The Production Manager of Sirius Media Group, and Lead Developper of Cloudsdale Group.
            Originaly, Cloudsdale Radio was created as a challenge for Sirius, in 2012, the challenge was to create a fully functional webradio from scratch, and learn more about developement and server management.
            The station start with a single server, a little VPS and few song, and got a peak with 6 dedicated server to run all the 3 station with broadcaster, relay, and the website, and more than 10 000 songs.
            After 6 years, They decide to close the station to create a new one, to follow the team moods.
            In 2018, They created CloudsdaleGroup, to regroup all the Cloudsdale Radio station and other webradio, like Sirius Radio And EquestriaFM.
            In 2018 EquestriaFM is shutting down to the benefit of Cloudsdale Radio, his Manager left <a href="http://cloudsdalegroup.com" target="_blank" rel="noopener noreferrer">CloudsdaleGroup</a> few month later to focus on his own project.
        </p>
        <p class="us">
          We are broadcasting 24/7 and are availiable everywhere in the world for free, all you need is a internet connection.<br>
          Our station broadcast JPOP,Anime &amp; Anime related music (remix, fan made, cover, etc...).<br>
          We schedule Live show, every now and then, you can follow us on <a href="http://twitter.com/_animefm" target="_blank" rel="noopener noreferrer">Twitter</a> to be aware when live show and maintenance are planned!
        </p>
  </div>
  <hr>
  <div class="faq">
    <h1 class="faqtitle">Q&amp;A</h1>
    <p class="qua">
      <b>What is AnimeFM?</b><br>
      AnimeFM is a free Webradio that broadcasting Anime &amp; Japan related music 24/24 and 7/7<br>
      The station is developed by Cloudsdale Group.<br>
      <br><b>Why a changelogs and why there is "Cloudsdale Radio" Change logs here?</b><br>
      We like to see we are going foward with the station, AnimeFM is the direct successor of Cloudsdale Radio, it's like a Cloudsdale Radio 8.<br>
      Cloudsdale Radio was very poorly optimized and was asking for a lot of efforts to be maintained. This change logs shows us that we are moving in the right direction.<br>
      <br><b>Do you have live show?</b><br>
      Not for the moment. we looking for people would like to cast on our station regulary, but for now Asthriona have a yearly show for new year.<br>
      <br><b>Can I join the team as host?</b><br>
      Yes! if you had an idea for a show that fit in the station theme, please feel free to send us a e-mail at <a href="mailto:contact@animefm.Co">Contact@AnimeFM.co</a> ! we will take care of your request as soon as possible.<br>
      We are only asking for an exemple of the you you would like to produce on our station, and our producer will take care of the little edit you will had to do to fit perfectly with the station.<br>
      We usualy don't ask much changement and just validate your topics.<br>
      <br><b>I want my song/Album/Artwork removed from this website.</b><br>
      If we add one of your artwork/Album/song by mistake, please contact us at <a href="MAILTO:legal@animefm.co">legal@AnimeFM.co</a> with the name of you album/song or with the name and location of your artwork.<br>
      We will remove in the next 24 hours and send you an e-mail to comfirm we removed your art.
    </p>
  </div>
  <hr>
  <div class="privacy">
    <h1 class="title">Privacy</h1>
    <p>
      Cloudsdale Group and it's associates do not collect any personal data.<br>
      In no case we know who you are, what you do in life, or what you like.
      However, for the proper functioning of the website and its infrastructure, we keep "logs" including your IP address and the links requested by your browser. This allows us to correct the site bugs and in case of attack on our infrastructure know where the attack comes from
      These logs are removed regularly by the servers at each start of services, they are restarted every week for maintenance.
    </p>
    <p class="separator"></p>
  </div>
  <hr>
    <div class="relay">
    <h1 class="title">Our Relay</h1>
    <p>
      We have multiple relay availiable, if the player is too slow or too far from your current location you can use our relay. We actually have relay in France (Our main broacaster is in france) and Netherland.<br>
      We are planning to add other relay in other country, For now our objective is to deploy relay at Singapore, North America and London.<br>
      Every CloudsdaleGroup relay host all our station, like CloudsdaleRadio, Radio Silence and AnimeFM.<br>
      here our relay Links:<br>
      <ul>
        <li><a href="http://frrelay.cloudsdaleradio.com" target="_blank" rel="noopener noreferrer">French Relay</a></li>
        <li><a href="http://amsrelay.cloudsdaleradio.com" target="_blank" rel="noopener noreferrer">Netherlands Relay</a></li>
        <!--<li><a href="http://plrelay.cloudsdaleradio.com" target="_blank" rel="noopener noreferrer">Poland Relay</a></li>
        <li><a href="http://sgpRelay.Cloudsdaleradio.com" target="_blank" rel="noopener noreferrer">Singapore </a></li>
        <li><a href="http://ukrelay.cloudsdaleradio.com" target="_blank" rel="noopener noreferrer">United Kingdom Relay</a></li>-->
      </ul>
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