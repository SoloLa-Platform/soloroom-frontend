<template>
  <div class="editor-container">
    <!-- Music Sheet -->
    <div class="score-container">
      <SheetMusic
        v-if="mounted"
        @osmdInit="osmdInit"
        @scoreLoaded="scoreLoaded"
        :score="selectedScore"
        :ready="pbEngineReady"
      ></SheetMusic>
    </div>

    <!-- Playing Control -->
    <div class="editor-control">
      <PlayingController :playbackEngine="pbEngine" />
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

  data() {
    return {
      pbEngine: new PlaybackEngine(),
      pbEngineReady: false,
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
      await this.pbEngine.loadScore(this.osmd);
      // console.log('pbEngine ready');
      this.pbEngineReady = true;
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
    flex-basis: auto;

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
