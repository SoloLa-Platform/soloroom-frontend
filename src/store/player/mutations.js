export default {
  setVolumeState(state, {
    volume
  }) {
    state.volume = volume;
  },
  setRepeat(state, {
    repeat
  }) {
    state.repeat = repeat;
  },
  setPlaybackTime(state, {
    playtimeInfo
  }) {
    state.playbackTimeInfo = playbackTimeInfo;
  },
  setIsPlaying(state, {
    isPlaying
  }) {
    state.isPlaying = isPlaying;
  }
};
