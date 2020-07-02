import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js'

const playerState = {
  volume: 1,
  repeat: 0,
  playbackTimeInfo: {
    currentPlaybackTime: null,
    currentPlaybackDuration: null,
    currentPlaybackTimeRemaining: null,
  },
  playbackState: 0,
  currentlyPlaying: null,
  isPlaying: false
};


export default {
  namespaced: true,
  playerState,
  mutations,
  actions,
  getters,
};
