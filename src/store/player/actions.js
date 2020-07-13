const actions = {
  changePlaybackTime(_, {
    time
  }) {
    return MusicKit.getInstance().player.seekToTime(time);
  },

  setRepeatStatus({
    commit
  }, repeat = 'toggle') {
    // 0 - off, 1 - one, 2 - on
    if (repeat === 'toggle') {
      // eslint-disable-next-line operator-linebreak
      MusicKit.getInstance().player.repeatMode =
        MusicKit.getInstance().player.repeatMode === 0 ?
        2 :
        MusicKit.getInstance().player.repeatMode - 1;
    } else {
      MusicKit.getInstance().player.repeatMode = repeat;
    }
    commit('setRepeat', {
      repeat: MusicKit.getInstance().player.repeatMode
    });
    if (window.localStorage) {
      window.localStorage.setItem(
        'repeat',
        JSON.stringify(MusicKit.getInstance().player.repeatMode),
      );
    }
  },

  setVolume({
    commit
  }, {
    volume
  }) {
    const volumeValue = parseFloat(volume);
    MusicKit.getInstance().player.volume = volumeValue;
    commit('setVolumeState', {
      volume: volumeValue
    });
  },

  async next() {
    await MusicKit.getInstance().player.skipToNextItem();
  },
  async previous() {
    await MusicKit.getInstance().player.skipToPreviousItem();
  },
  async pause() {
    await MusicKit.getInstance().player.pause();
  },
  async togglePlayPause({
    state,
    dispatch,
    rootState
  }) {
    if (state.isPlaying) return dispatch('pause');
    if (!rootState.music.auth.isAuthorized) {
      return MusicKit.getInstance().player.play();
    }
    await MusicKit.getInstance().player.prepareToPlay();
    await MusicKit.getInstance().player.play();
  },
};
