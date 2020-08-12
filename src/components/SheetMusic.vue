<template>
  <div>
    <div class="score" ref="score" />
  </div>
</template>

<script lang="ts">
import {
  OpenSheetMusicDisplay,
  Cursor,
  VoiceEntry,
  Note,
  StemDirectionType,
} from 'opensheetmusicdisplay';

import axios from 'axios';

export default {
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
};
</script>

<style></style>
