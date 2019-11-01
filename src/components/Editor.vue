<template>
<div class="editor-container">
  <div ref="score-container" class="score-container">
    <div class="score" ref="score">    
    </div>
  </div>
  <div class="control-container">
  </div>
</div>
</template>

<script lang="ts">
import Vue, { VNode } from 'vue';
import { OpenSheetMusicDisplay, Cursor, VoiceEntry, Note, StemDirectionType } from 'opensheetmusicdisplay';
import axios from 'axios';

export default Vue.extend({
  name: 'Editor',
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
    async createOSMDViewer(): Promise<any> {
      await this.fetchDemoSheet();
      const container: HTMLElement = this.$refs.score as HTMLElement;

      this.OSMDViewer = new OpenSheetMusicDisplay(container, { autoResize: true });
      this.OSMDViewer.setLogLevel('info');
      this.OSMDViewer.load(this.demoSheet as string).then(() => {
        this.OSMDViewer.render();
      });
    },
    fetchDemoSheet() {
      return axios.post('/sheet-music/demo', {
        header: {
          'Content-Type': 'application/xml; charset=utf-8',
        },
      }).then((response) => {
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
    
    .score {
      display: inline-block;
      height: 70vh;
      overflow-y: scroll;
      width: 100%;
    }
  }
  .control-container {
    background-color: #CCCCCC;
    height: 80px;
  }
}

</style>
