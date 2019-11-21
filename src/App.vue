<template>
  <div id="app">
    <NavigationBar/>
    <!-- this will be router-view -->
    <Transcription/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Transcription from '@/pages/transcription/Transcription.vue';
import NavigationBar from '@/components/NavigationBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavigationBar,
    Transcription,

  },
});
</script>

<style lang="scss">
body, html  {
  margin: 0;
  padding: 0;
}
</style>
