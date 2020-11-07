<template>
  <div class="playing-controller">
    <div class="playing-slider">
      <!-- <span>{{ playbackTimeInfo.currentPlaybackTime }} </span> -->
      <!-- <vue-slider
        :width="600"
        v-model="playbackTimeInfo.currentPlaybackTime"
        :min="0"
        :max="playbackTimeInfo.currentPlaybackDuration || 10"
        :tooltip-formatter="convertToMinutes"
        @change="changePlayPosition"
        :lazy="true"
      /> -->
      <vue-slider
        :value="this.playbackEngine.currentIterationStep"
        :min="0"
        :max="this.playbackEngine.iterationSteps"
        :step="1"
        @input="(val) => this.playbackEngine.jumpToStep(val)"
        class="progress-slider"
      />
      <!-- <div class="play-time-labels">
        <div>{{ currentTimeInMinutes }}</div>
        <div>{{ currentDurationInMinutes || '0:00' }}</div>
      </div> -->
    </div>
    <div class="playing-buttons">
      <span @click="play" v-if="playbackEngine.state !== 'PLAYING'">
        <font-awesome-icon class="playing-controller__icons" size="1x" icon="play" />
      </span>
      <div v-else @click="pause">
        <font-awesome-icon class="playing-controller__icons" size="1x" icon="pause" />
      </div>

      <div @click="setLoop">
        <font-awesome-icon class="playing-controller__icons" icon="redo" title="Repeat" size="1x" />
      </div>
      <div class="volume-container">
        <font-awesome-icon
          @mouseenter="showSlider"
          class="playing-controller__icons"
          :icon="volume === 0 ? 'volume-mute' : 'volume-up'"
          size="1x"
        />
        <span>{{ volume }}</span>
        <transition name="fade">
          <div class="volume-slider" @mouseleave="volumeVisible = false" v-if="volumeVisible">
            <vue-slider
              direction="btt"
              v-model="volume"
              :min="0"
              :max="1"
              :height="100"
              :interval="0.02"
              :tooltip-placement="'right'"
              :tooltip-formatter="(value) => Math.round(value * 100)"
              @change="setVolume"
            />
          </div>
        </transition>
      </div>
      <button @click="playbackEngine.stop()">stop</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import VueSlider from 'vue-slider-component';

export default {
  name: 'PlayerController',
  components: { VueSlider },
  props: {
    playbackEngine: {
      type: Object,
      default: () => ({}),
    },
    youtubePlayer: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      volumeVisible: false,
      volume: 1,
      playbackTimeInfo: {
        currentPlaybackTime: null,
        currentPlaybackDuration: null,
        currentPlaybackTimeRemaining: null,
      },
    };
  },
  computed: {
    ...mapGetters('player', ['getNowPlayingStatus']),
    ...mapState('player', {
      volumeState: (state) => state.volume,
      repeat: (state) => state.repeat,
      isPlaying: (state) => state.isPlaying,
    }),
    youtubePlayerState() {
      return this.youtubePlayer.state;
    },
    isYoutubePlayerStateReady() {
      return this.youtubePlayerState === 'READY';
    },
  },
  methods: {
    ...mapActions('player', ['changePlaybackTime', 'setVolume', 'setRepeatStatus']),
    async changePlayPosition(time) {
      await this.changePlaybackTime({ time });
    },
    changePlayPosition() {
      this.$bus.$emit(
        'Youtube:changePlayPosition',
        this.currentPlaybackTimeInfo.currentPlaybackTime,
      );
    },
    convertToMinutes(sec) {
      return (sec - (sec %= 60)) / 60 + (9 < sec ? ':' : ':0') + sec;
    },
    play() {
      this.youtubePlayer.play();
      this.playbackEngine.play();
    },
    pause() {
      this.youtubePlayer.pause();
      this.playbackEngine.pause();
    },

    stopVideo() {
      this.$bus.$emit('Youtube:stopVideo');
    },
    setLoop() {
      this.$bus.$emit('Youtube:setLoop');
    },
    setVolume() {
      this.$bus.$emit('Youtube:setVolume', this.volume);
    },
    showSlider() {
      this.volumeVisible = true;
    },
  },
};
</script>

<style lang="scss">
.playing-controller {
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 130px;
  justify-content: space-between;
  align-items: space-evenly;
  background-color: #bbb;

  .playing-slider {
    margin: 0 10px 15px;
  }

  .playing-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

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

.volume-container {
  position: relative;
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
  bottom: 0px;
  right: -5px;
  z-index: 10;
  border-radius: 10px;
  color: black;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// TODO this should be extract into AppSlider component
/* component style */
.vue-slider-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* rail style */
.vue-slider-rail {
  background-color: #ccc;
  border-radius: 15px;
}

/* process style */
.vue-slider-process {
  background-color: #3498db;
  border-radius: 15px;
}

/* mark style */
.vue-slider-mark {
  z-index: 4;
}
.vue-slider-mark:first-child .vue-slider-mark-step,
.vue-slider-mark:last-child .vue-slider-mark-step {
  display: none;
}
.vue-slider-mark-step {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.16);
}
.vue-slider-mark-label {
  font-size: 14px;
  white-space: nowrap;
}
/* dot style */
.vue-slider-dot-handle {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
}
.vue-slider-dot-handle-focus {
  box-shadow: 0px 0px 1px 2px rgba(52, 152, 219, 0.36);
}

.vue-slider-dot-handle-disabled {
  cursor: not-allowed;
  background-color: #ccc;
}

.vue-slider-dot-tooltip-inner {
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border-color: #3498db;
  background-color: #3498db;
  box-sizing: content-box;
}
.vue-slider-dot-tooltip-inner::after {
  content: '';
  position: absolute;
}
.vue-slider-dot-tooltip-inner-top::after {
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-top-color: inherit;
}
.vue-slider-dot-tooltip-inner-bottom::after {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-bottom-color: inherit;
}
.vue-slider-dot-tooltip-inner-left::after {
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-left-color: inherit;
}
.vue-slider-dot-tooltip-inner-right::after {
  right: 100%;
  top: 50%;
  transform: translate(0, -50%);
  height: 0;
  width: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-right-color: inherit;
}

.vue-slider-dot-tooltip-wrapper {
  opacity: 0;
  transition: all 0.3s;
}
.vue-slider-dot-tooltip-wrapper-show {
  opacity: 1;
}

/*# sourceMappingURL=default.css.map */
</style>
