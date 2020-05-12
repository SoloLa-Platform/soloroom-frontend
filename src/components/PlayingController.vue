<template>
  <div class="playing-controller">
    <vue-slider
      :width="200"
      :value="100"
      :min="0"
      :max="100"
      :tooltip-formatter="convertToMinutes"
      @change="changePlayPosition"
      :lazy="true"
      class="scrubber"
    />
    <div @click="playVideo">
      <font-awesome-icon
        class="playing-controller__icons"
        size="1.5x"
        icon="play"
      />
    </div>
    <div @click="pauseVideo">
      <font-awesome-icon
        class="playing-controller__icons"
        size="1.5x"
        icon="pause"
      />
    </div>

    <div @click="setRepeatStatus()">
      <font-awesome-icon
        class="playing-controller__icons"
        icon="redo"
        title="Repeat"
        size="1.5x"
      />
    </div>

    <font-awesome-icon
      @mouseenter="volumeVisible = true"
      class="playing-controller__icons"
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
import { mapGetters, mapActions, mapState } from 'vuex';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'PlayerController',
  components: { VueSlider },
  data() {
    return {
      volumeVisible: false,
    };
  },
  computed: {
    ...mapGetters('player', ['getNowPlayingStatus']),
    ...mapState('player', {
      playbackTimeInfo: state => state.playbackTimeInfo,
      volumeState: state => state.volume,
      repeat: state => state.repeat,
      isPlaying: state => state.isPlaying,
    }),
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
    ...mapActions('player', [
      'changePlaybackTime',
      'setVolume',
      'setRepeatStatus',
      'play',
      'pause',
    ]),
    async changePlayPosition(time) {
      await this.changePlaybackTime({ time });
    },
    convertToMinutes(sec) {
      return (sec - (sec %= 60)) / 60 + (9 < sec ? ':' : ':0') + sec;
    },
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

<style lang="scss">
.playing-controller {
  box-sizing: border-box;
  display: flex;
  align-self: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #bbb;

  &__icons {
    flex-shrink: 0;
    transition: 0.1s;
    padding: 15px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #ddd;
    color: #333;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.6);
    }
  }
}

.volume-slider {
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 130px;
  background: rgba(14, 11, 8, 0.6);
  position: absolute;
  bottom: 30px;
0px;
  z-index: 10;
  border-radius: 10px;
  color: black;
}

.scrubber {
  color: black;
  width: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
