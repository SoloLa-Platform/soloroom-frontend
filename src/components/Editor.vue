<template>
  <div class="editor-container">
    <div class="score-container">
      <SheetMusic
        v-if="mounted"
        @osmdInit="osmdInit"
        @scoreLoaded="scoreLoaded"
        :score="selectedScore"
        :ready="playbackEngineReady"
      />
    </div>
    <div class="editor-control">
      <PlayingController
        :playbackEngine="playbackEngine"
        :youtubePlayer="youtubePlayer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VNode } from 'vue';
import PlayingController from '@/components/PlayingController.vue';
import SheetMusic from '@/components/SheetMusic.vue';
import PlaybackEngine from '@/playback/PlaybackEngine';

export default Vue.extend({
  name: 'Editor',
  components: {
    PlayingController,
    SheetMusic,
  },
  props: {
   youtubePlayer: {
     type: Object,
   },
  },
  data() {
    return {
      playbackEngine: new PlaybackEngine(),
      playbackEngineReady: false,
      mounted: false,
      osmd: null,
      selectedScore: '',
    };
  },
  methods: {
    osmdInit(osmd) {
      // console.log('OSMD init');
      this.osmd = osmd;
      this.selectedScore =
        'https://opensheetmusicdisplay.github.io/demo/sheets/MuzioClementi_SonatinaOpus36No3_Part1.xml';
    },
    async scoreLoaded() {
      // console.log('Score loaded');
      // if (this.osmd.sheet.title) this.scoreTitle = this.osmd.sheet.title.text;
      await this.playbackEngine.loadScore(this.osmd);
      // console.log('playbackEngine ready');
      this.playbackEngineReady = true;
    },
  },
  mounted() {
    setTimeout(() => {
      this.mounted = true;
    }, 200);
  },
});
</script>

<style lang="scss" scoped>
.editor-container {
  display: flex;
  flex-direction: column;

  .score-container {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 360px;
    overflow-y: auto;
    padding: 1%;
  }

  .editor-control {
    flex-grow: 0;
    flex-shrink: 1;
    background-color: #ffffff;
    border: 1px solid rgb(224, 224, 224);
  }
}
</style>
