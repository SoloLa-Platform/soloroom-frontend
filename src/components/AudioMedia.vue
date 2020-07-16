<template>
  <div class="audio-media-container">
    <div class="video-container">
      <div class="title"></div>
      <div class="video-frame">
        <Youtube />
      </div>
    </div>
    <div class="youtube-source flex indent">
      <div class="row input-pair">
        <label for="youtube-url" class="input-label">Youtube</label>
        <input
          id="youtube-url"
          class="basic-input youtube-url"
          type="text"
          placeholder="Youtube URL"
        />
      </div>
      <div class="row">
        <button class="primary transcribe">Transcribe</button>
      </div>
    </div>
    <!-- <div class="upload-source">
      <label for="upload-audio" class="input-label">Upload audio</label>
      <input id="upload-audio" type="file">
      <button class="primary upload">Upload</button>
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Youtube from '@/components/Youtube.vue';

export default Vue.extend({
  name: 'AudioMedia',
  components: {
    Youtube,
  },
});
</script>

<style lang="scss" scoped>
.audio-media-container {
  background: #ececec;
  border: 1px solid rgb(224, 224, 224);
}
.video-container {
  padding: 1em;
  .title {
    font-size: 1.5em;
    font-weight: 1000;
    line-height: 2.4em;
  }
  .video-frame {
    background-color: #111111;
    width: 350px;
    height: 210px;
  }
}
.input-label {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
}
.basic-input {
  display: block;
}
.flex {
  display: flex;
  flex-direction: column;
}
.input-pair {
  margin-top: 10px;
  margin-bottom: 15px;
}
.youtube-url {
  width: 300px;
}
.indent {
  margin-left: 20px;
}
// move to common.scss
.primary {
  -moz-box-shadow: inset 0px 1px 0px 0px #54a3f7;
  -webkit-box-shadow: inset 0px 1px 0px 0px #54a3f7;
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #007dc1),
    color-stop(1, #0061a7)
  );
  background: -moz-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -webkit-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -o-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: -ms-linear-gradient(top, #007dc1 5%, #0061a7 100%);
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#007dc1', endColorstr='#0061a7',GradientType=0);
  background-color: #007dc1;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #124d77;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #154682;
}
// move to common.scss
.primary:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #0061a7),
    color-stop(1, #007dc1)
  );
  background: -moz-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -webkit-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -o-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: -ms-linear-gradient(top, #0061a7 5%, #007dc1 100%);
  background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0061a7', endColorstr='#007dc1',GradientType=0);
  background-color: #0061a7;
}
// move to common.scss
.primary:active {
  position: relative;
  top: 1px;
}
.transcribe {
  width: 10em;
}
</style>
