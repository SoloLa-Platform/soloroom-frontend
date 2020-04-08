<template>
  <div class="playing-controller">
    <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
    <button @click="stopVideo">stop</button>

    <div class="volume">
      <label for="volume">volume</label>
      <input
        @click="getVolume"
        @input="setVolume"
        type="range"
        min="0"
        max="100"
        step="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
    setVolume() {
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

<style>
.playing-controller {
  display: flex;
  justify-content: space-evenly;
}
</style>
