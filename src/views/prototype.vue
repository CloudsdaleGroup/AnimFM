<template>
  <section class="Prototype">
    <TheNav />
    <div class="container">
      <p class="text-left">
        <strong>Welcome on AnimeFM developement part!</strong>
        <br />If you dont like code related stuff, this part is going to be boering for you!
        <br />Here We gonna discuss of this website developement, And i'm gonna be honest with you, I made it in a rush!, the project was on my desk but
        we had a lot of issue near the launch, our music database was not ready, we had to process all the song, some server god DDoS by Cloudsdale Radio concurence
        anyway, that was not a fun part.
      </p>
      <p class="text-left">
        <strong>Why using vue?</strong>
        <br />Did I said it was made on a rush? because I dont really know vue , but I had to use it for few things and I liked it, so i deciode to make it in vue
        see if I can maintain it and make smth better without spending all my time on it and keep it or drop it, For now i'll keep it! It's fun ^w^
      </p>
      <h1 class="text-left">Change Logs</h1>
      <p class="text-left"></p>
      <ul>
        <strong>version 1.0</strong>
        <li>Add Website!</li>
      </ul>
    </div>
  </section>
</template>

<style>
</style>

<script>
// @ is an alias to /src
import TheNav from "@/components/TheNav.vue";

export default {
  name: "404",
  components: {
    TheNav
  }
};
</script>