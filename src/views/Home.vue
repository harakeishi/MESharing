<template>
  <div class="home">
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button type="button" @click="playVideo" name="button">再生</button>
    <button type="button" @click="stopVideo" name="button">停止</button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      videoId: '0iAF8TJAqp4'
    }
  },
  methods: {
    playVideo () {
      this.player.playVideo()
    },
    stopVideo () {
      this.player.pauseVideo()
    },
    playing () {
      console.log('we are watching!!!')
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  }
}
</script>
