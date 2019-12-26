<template>
    <section>
      <div class="player">
        <exPlayer />
      </div>
   </section>
</template>
<script>
import exPlayer from '@/components/exPlayer.vue'
export default {
name: 'AnotherPlayer',
  components: {
    exPlayer
  }
}
</script>
<style scoped>
.player {
  height: 100%;
  width: 30%;
}
</style>