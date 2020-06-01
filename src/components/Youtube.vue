<template>
  <div class="youtube">
    <youtube
      :video-id="videoId"
      ref="youtube"
      width="100%"
      height="100%"
    />
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
    this.$bus.$on('Youtube:playVideo', () => {
      this.playVideo();
    }),
      this.$bus.$on('Youtube:pauseVideo', () => {
        this.pauseVideo();
      }),
      this.$bus.$on('Youtube:stopVideo', () => {
        this.stopVideo();
      }),
      // this.$bus.$on('getVolume', () => {
      //   return this.getVolume();
      // }),
      this.$bus.$on('setVolume', volume => {
        this.setVolume(volume);
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
    setVolume(volume) {
      console.log(volume);
      this.player.setVolume(volume);
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
