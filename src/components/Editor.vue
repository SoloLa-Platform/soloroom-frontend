<template>
  <div class="editor-container">
    <!-- Music Sheet -->
    <div class="score-container">
      <SheetMusic></SheetMusic>
    </div>

    <!-- Playing Control -->
    <div class="editor-control">
      <PlayingController />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VNode } from 'vue';

import PlayingController from '@/components/PlayingController.vue';
import SheetMusic from '@/components/SheetMusic.vue';

export default Vue.extend({
  name: 'Editor',
  components: {
    PlayingController,
    SheetMusic,
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
