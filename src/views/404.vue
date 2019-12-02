<template>
<div class="container">
  <div class="row">
      <TheNav />
    <div class="mx-auto">
      <h1 class="text-center">Page not Found </h1>
      <h3>Did you do smth wrong ?</h3>
      <p>The server said it didnt find the page you ask for, We look everywhere and it seem like we lost it. Sorry :c<br>
      Please try again or try another link, We recommend using the NavBar on the top of you screen. All the link has been verified!</p>
      <p></p>
      <img class="rounded" src="http://cdn.asthriona.com/v9iflkC.gif" alt="idk dude, bouge ta souris! :c">

    </div>
  </div>
</div>
</template>

<style scoped>
img {
    padding-bottom: 5px;
}
</style>

<script>
// @ is an alias to /src
import TheNav from '@/components/TheNav.vue'

export default {
  name: '404',
  components: {
    TheNav
  }
}
</script>