<template>
  <div class="playing-controller">
    <div class="playing-slider">
      <span>{{ playbackTimeInfo.currentPlaybackTime }} </span>
      <vue-slider
        :width="600"
        v-model="playbackTimeInfo.currentPlaybackTime"
        :min="0"
        :max="playbackTimeInfo.currentPlaybackDuration || 10"
        :tooltip-formatter="convertToMinutes"
        @change="changePlayPosition"
        :lazy="true"
        class="scrubber"
      />
      <!-- <div class="play-time-labels">
        <div>{{ currentTimeInMinutes }}</div>
        <div>{{ currentDurationInMinutes || '0:00' }}</div>
      </div> -->
    </div>

    <div class="playing-buttons">
      <div @click="playVideo">
        <font-awesome-icon
          class="playing-controller__icons"
          size="1x"
          icon="play"
        />
      </div>
      <div @click="pauseVideo">
        <font-awesome-icon
          class="playing-controller__icons"
          size="1x"
          icon="pause"
        />
      </div>

      <div @click="setLoop">
        <font-awesome-icon
          class="playing-controller__icons"
          icon="redo"
          title="Repeat"
          size="1x"
        />
      </div>

      <div class="volume-container">
        <font-awesome-icon
          @mouseenter="showSlider"
          class="playing-controller__icons"
          :icon="volume === 0 ? 'volume-mute' : 'volume-up'"
          size="1x"
        />
        <!-- <span>{{ volume }}</span> -->

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
              @change="setVolume"
            />
          </div>
        </transition>
      </div>

      <button @click="stopVideo">stop</button>
    </div>
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
      volume: 1,
      playbackTimeInfo: {
        currentPlaybackTime: null,
        currentPlaybackDuration: null,
        currentPlaybackTimeRemaining: null,
      },
    };
  },
  computed: {},
  methods: {
    // async changePlayPosition(time) {
    //   await this.changePlaybackTime({ time });
    // },
    changePlayPosition() {
      this.$bus.$emit(
        'Youtube:changePlayPosition',
        this.currentPlaybackTimeInfo.currentPlaybackTime,
      );
    },
    convertToMinutes(sec) {
      return (sec - (sec %= 60)) / 60 + (9 < sec ? ':' : ':0') + sec;
    },
    playVideo() {
      this.$bus.$emit('Youtube:playVideo');
    },
    pauseVideo() {
      this.$bus.$emit('Youtube:pauseVideo');
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
  // border: 1px solid;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-self: center;
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  align-items: space-evenly;
  background-color: #bbb;

  .playing-slider {
    margin: 0 10px 15px;
    // border: 1px solid;
  }

  .playing-buttons {
    // padding: 10px;
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
.scrubber {
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
</style>
