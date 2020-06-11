import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import VueYoutube from 'vue-youtube';
<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faRecordVinyl,
  faAppleAlt,
  faHeadphones,
  faArrowLeft,
  faArrowRight,
  faCommentAlt,
  faVideo,
  faRandom,
  faRedo,
  faHeart,
  faVolumeUp,
  faVolumeMute,
  faList,
  faWindowClose,
  faEllipsisH,
  faCat,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faPlay,
  faPause,
  faRecordVinyl,
  faAppleAlt,
  faHeadphones,
  faArrowLeft,
  faArrowRight,
  faCommentAlt,
  faVideo,
  faRandom,
  faRedo,
  faHeart,
  faVolumeUp,
  faVolumeMute,
  faList,
  faWindowClose,
  faEllipsisH,
  faCat,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
=======
>>>>>>> 8ac64a3305ffd8e318289335d2d0dd42fbcaf062

Vue.use(VueYoutube);

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
