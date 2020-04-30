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
      volume: 0.8,
    };
  },
  mounted() {
    this.bus.$on('playVideo', () => {
      this.playVideo();
    }),
      this.bus.$on('pauseVideo', () => {
        this.pauseVideo();
      }),
      this.bus.$on('stopVideo', () => {
        this.stopVideo();
      }),
      this.bus.$on('getVolume', () => {
        return this.getVolume();
      }),
      this.bus.$on('setVolume', () => {
        this.setVolume();
      });
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    stopVideo() {
      this.player.stopVideo();
    },
    getVolume() {
      this.value = this.player.getVolume();
    },
    setVolume(val) {
      this.player.setVolume(this.value);
    },
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
