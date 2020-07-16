<template>
  <div class="editor-container">
    <div class="score-container">
      <div class="score" ref="score" />
    </div>
    <div class="editor-control">
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
        .then((response) => {
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
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    
    overflow-y: auto;
    .score {
      display: flex;
    }
  }
  .editor-control {
    flex-grow: 0;
    flex-shrink: 1;
    background-color: #ffffff;
    border: 1px solid rgb(224, 224, 224);
  }
}
</style>
