<template>
  <div class="editor-container">
    <div ref="score-container" class="score-container">
      <!-- SheetMusic Component-->
      <div class="score" ref="score"></div>
      <!-- NoteToolBox Component-->
      <div class="note-toolbox"></div>
    </div>
    <!-- PlayingController Component-->
    <div class="control-container">
      <PlayingController />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VNode } from 'vue';
// todos
import {
  OpenSheetMusicDisplay,
  Cursor,
  VoiceEntry,
  Note,
  StemDirectionType,
} from 'opensheetmusicdisplay';
import axios from 'axios';
import PlayingController from '@/components/PlayingController.vue';

export default Vue.extend({
  name: 'Editor',
  components: {
    PlayingController,
  },
  data() {
    return {
      OSMDViewer: {} as any,
      demoSheet: '' as string,
    };
  },
  created() {
    this.createOSMDViewer();
  },
  methods: {
    // todo: move into SheetMusic component
    async createOSMDViewer(): Promise<any> {
      await this.fetchDemoSheet();
      const container: HTMLElement = this.$refs.score as HTMLElement;

      this.OSMDViewer = new OpenSheetMusicDisplay(container, {
        autoResize: true,
      });
      this.OSMDViewer.setLogLevel('info');
      this.OSMDViewer.load(this.demoSheet as string).then(() => {
        this.OSMDViewer.render();
      });
    },
    // todo: move into service
    fetchDemoSheet() {
      return axios
        .post('/sheet-music/demo', {
          header: {
            'Content-Type': 'application/xml; charset=utf-8',
          },
        })
<<<<<<< HEAD
        .then((response) => {
=======
        .then(response => {
>>>>>>> 8ac64a3305ffd8e318289335d2d0dd42fbcaf062
          this.demoSheet = response.data;
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.editor-container {
  display: flex;
  flex-direction: column;
  .score-container {
    display: flex;
    height: calc(90vh - 70px);
    .score {
      display: inline-block;
      overflow-y: scroll;

      @media screen and (max-width: 1367px) {
        // width: 1200px;
        width: calc(69vw - 60px);
      }

      @media screen and (min-width: 1366px) and (max-width: 1920px) {
        // width: 1500px;
        width: 75vw;
      }
    }
  }
  .control-container {
    background-color: #ffffff;
    height: 50px;
    border: 1px solid rgb(224, 224, 224);
  }
  .note-toolbox {
    width: 60px;
    border: 1px solid rgb(224, 224, 224);
  }
}
</style>
