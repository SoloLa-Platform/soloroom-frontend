<template>
  <div class="transcription-container">
    <div class="transcription-content">
      <!-- MediaWrapper Component-->
      <div class="media-wrapper">
        <AudioMedia/>
      </div>
      <!-- Editor Component -->
      <div class="editor-wrapper">
        <Editor class="editor"/>
      </div>
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
.transcription-container {
  display: flex;
  flex-direction: column;

  .transcription-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    .media-wrapper {
      background: #ECECEC;
      border: 1px solid rgb(224, 224, 224);
    }
  }
}
</style>>


