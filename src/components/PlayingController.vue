<template>
  <div class="playing-controller">
    <vue-slider v-model="value"></vue-slider>
    <div @click="playVideo">
      <font-awesome-icon class="controlIcons" size="1.5x" icon="play" />
    </div>
    <div @click="pauseVideo">
      <font-awesome-icon class="controlIcons" size="1.5x" icon="pause" />
    </div>

    <div @click="setRepeatStatus()">
      <font-awesome-icon
        class="controlIcons"
        icon="redo"
        title="Repeat"
        size="1.5x"
      />
    </div>

    <font-awesome-icon
      @mouseenter="volumeVisible = true"
      class="controlIcons"
      :icon="volume === 0 ? 'volume-mute' : 'volume-up'"
      size="1.5x"
    />

    <transition name="fade">
      <div
        class="volume-slider"
        @mouseleave="volumeVisible = false"
        v-if="volumeVisible"
      >
        <vue-slider
          direction="btt"
          v-model="volume"
          :min="0"
          :max="1"
          :height="100"
          :interval="0.02"
          :tooltip-placement="'right'"
          :tooltip-formatter="value => Math.round(value * 100)"
        />
      </div>
    </transition>

    <button @click="stopVideo">stop</button>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'PlayerController',
  components: { VueSlider },
  data() {
    return {
      volumeVisible: false,
      isPlaying: false,
    };
  },
  computed: {
    volume: {
      get() {
        return this.volumeState;
      },
      set(value) {
        this.setVolume({ volume: value });
      },
    },
  },
  methods: {
    playVideo() {
      this.$bus.$emit('playVideo');
    },
    pauseVideo() {
      this.$bus.$emit('pauseVideo');
    },
    stopVideo() {
      this.$bus.$emit('stopVideo');
    },
    getVolume() {
      this.$bus.$emit('getVolume');
    },
    setVolume() {
      this.$bus.$emit('setVolume');
    },
  },
};
</script>

<style>
.playing-controller {
  box-sizing: border-box;
  display: flex;
  align-self: center;
  flex-shrink: 0;
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #bbb;
}

.controlIcons {
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #ddd;
  color: #333;
}

.volume-slider {
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 130px;
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  bottom: 0;
  left: -10px;
  z-index: 10;
  border-radius: 10px;
  color: black;
}

.scrubber {
  color: black;
  width: 100px;
}
</style>
