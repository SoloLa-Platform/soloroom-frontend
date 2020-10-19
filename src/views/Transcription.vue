<template>
  <div class="base">
    <div class="content">
      <AudioMedia class="video-panel"/>
      <Editor
        class="editor"
        :youtubePlayer="youtube" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import YoutubePlayer from '@/models/YoutubePlayer.ts';
import Editor from '@/components/Editor.vue';
import AudioMedia from '@/components/AudioMedia.vue';

export default {
  name: 'Transcription',
  data() {
    return {
      viewer: Object,
      youtube: new YoutubePlayer({
        videoId: 'hxwjT90i8Ys',
        height:'100%',
        width: '100%',
      }),
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


