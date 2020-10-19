import { YoutubeSettings } from '@/models/YoutubeSettings';

export default class YoutubePlayer {
  public player: any;
  public YT: any;
  public config: YoutubeSettings;
  public state: string;

  constructor(config: YoutubeSettings) {
    this.config = config;
    this.state = 'INIT';
    this.injectScript();
    /* tslint:disable:no-string-literal */
    window['onYouTubeIframeAPIReady'] = this.onYouTubeIframeAPIReady.bind(this);
  }

  public onYouTubeIframeAPIReady(): void {
    /* tslint:disable:no-string-literal */
    if (!window['YT']) {
      // tslint:disable:no-console
      console.error('YT iframe API failed to load');
      return;
    }
    /* tslint:disable:no-string-literal */
    this.player = new window['YT'].Player('player', {
      height: '100%',
      width: '100%',
      videoId: this.config.videoId,
      events: {
        onReady: this.onPlayerReady.bind(this),
        onStateChange: this.onPlayerStateChange.bind(this),
        onPlayerError: this.onPlayerError.bind(this),
      },
    });
  }

  public injectScript(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  public onPlayerReady(event): void {
    this.state = 'READY';
  }

  public onPlayerStateChange(event): void {
    return;
  }

  public onPlayerError(event) {
    return;
  }

  public play(): void {
    this.state = 'PLAYING';
    this.player.playVideo();
  }

  public pause(): void {
    this.state = 'PAUSED';
    this.player.pauseVideo();
  }
}

