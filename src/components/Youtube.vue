<template>
  <div class="youtube">
    <youtube :video-id="videoId" ref="youtube" width="100%" height="100%" />

    <div class="btn-group">
      <button @click="playVideo">play</button>
      <button @click="pauseVideo">pause</button>
      <button @click="stopVideo">stop</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
    };
  },
  methods: {
    playVideo() {
      console.log(this);
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    stopVideo() {
      this.player.stopVideo();
    },
    // getVolume() {
    //   this.value = this.player.getVolume();
    // },
    // setVolume() {
    //   this.player.setVolume(this.value);
    // },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped>
.btn-group {
  display: flex;
  justify-content: space-evenly;
}
</style>
