<template>
  <div class="transcription-container">
      <div class="header">
        <h1 class="title">Solola</h1>
      </div>
      <div class="transcription-content">
        <div class="media-wrapper">
          <AudioMedia/>
        </div>
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
$header-height: 80px;
$media-width: 400px;

.transcription-container {
  display: flex;
  flex-direction: column;

  .header {
      height: $header-height; 
      background-color: #3C3B3B;
      color: #EEEEEE;
      .title {
        margin-left: 35px;
      }
    }
  .transcription-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    .media-wrapper {
      width: $media-width;
      background: #ECECEC;
    }
    .editor-wrapper {
      
      width: 880px;
      .editor {
        width: 100%;
      }
    }
  }
}
</style>>


