<template>
  <div>
    <div class="score" ref="score" />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';

export default {
  props: ['score', 'ready'],
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
        followCursor: true,
        autoResize: true,
      });
      this.$emit('osmdInit', this.OSMDViewer);

      this.OSMDViewer.setLogLevel('info');
      this.OSMDViewer.load(this.demoSheet as string).then(() => {
        this.OSMDViewer.render();
        this.$emit('scoreLoaded');
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

<style scoped lang="scss">
.score {
  width: 100%;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
}
</style>
