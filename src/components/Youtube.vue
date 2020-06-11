<template>
  <div class="youtube">
    <youtube :video-id="videoId" ref="youtube" width="100%" height="100%" />
<<<<<<< HEAD
=======

    <div class="btn-group">
      <button @click="playVideo">play</button>
      <button @click="pauseVideo">pause</button>
      <button @click="stopVideo">stop</button>
    </div>
>>>>>>> 8ac64a3305ffd8e318289335d2d0dd42fbcaf062
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'lG0Ys-2d4MA',
<<<<<<< HEAD
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
      this.$bus.$on('Youtube:setLoop', () => {
        this.setLoop();
      }),
      this.$bus.$on('Youtube:setVolume', volume => {
        this.setVolume(volume);
      }),
      this.$bus.$on('Youtube:changePlayPosition', playingPosition => {
        this.seekTo(playingPosition);
      });
  },
  methods: {
    playVideo() {
=======
    };
  },
  methods: {
    playVideo() {
      console.log(this);
>>>>>>> 8ac64a3305ffd8e318289335d2d0dd42fbcaf062
      this.player.playVideo();
    },
    pauseVideo() {
      this.player.pauseVideo();
    },
    stopVideo() {
      this.player.stopVideo();
    },
<<<<<<< HEAD
    setVolume(volume) {
      this.player.setVolume(volume * 100);
    },
    seekTo(playingPosition) {
      this.player.seekTo(playingPosition);
    },
=======
    // getVolume() {
    //   this.value = this.player.getVolume();
    // },
    // setVolume() {
    //   this.player.setVolume(this.value);
    // },
>>>>>>> 8ac64a3305ffd8e318289335d2d0dd42fbcaf062
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
