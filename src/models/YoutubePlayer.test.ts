import YoutubePlayer from '@/models/YoutubePlayer';

const DEFAULT_CONFIG = {
  videoId: '123',
  width: '320px',
  height: '240px',
};
describe('YoutubePlayer', () => {
  describe('constructor', () => {
    it('should call injectScript once', () => {

      const MOCK = jest.fn();
      YoutubePlayer.prototype.injectScript = MOCK;

      const player = new YoutubePlayer(DEFAULT_CONFIG);

      expect(MOCK).toBeCalledTimes(1);
    });
  });
  describe('onYouTubeIframeAPIReady', () => {
  it('should call console.error if window.YT is undefined', () => {
      const STUB = jest.fn();
      YoutubePlayer.prototype.injectScript = STUB;
      const player = new YoutubePlayer(DEFAULT_CONFIG);
      global.console.error = jest.fn();

      player.onYouTubeIframeAPIReady();

      expect(global.console.error).toBeCalledTimes(1);
    });
  });
});
