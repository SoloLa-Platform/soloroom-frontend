<template>
  <div class="base">
    <div class="content">
      <AudioMedia class="video-panel"/>
      <Editor class="editor"/>
    </div>
  </div>
</template>

<script lang="ts">
import Editor from '@/components/Editor.vue';
import AudioMedia from '@/components/AudioMedia.vue';

export default {
  name: 'Transcription',
  data() {
    return {
      viewer: Object,
    };
  },
  components: {
    Editor,
    AudioMedia,
  },
};
</script>

<style lang="scss" scoped>
.base {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: hidden;

    .editor {
      flex: 1 1 auto;
    }
  }
}
</style>>


