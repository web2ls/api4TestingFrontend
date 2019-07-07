import Unicon from 'vue-unicons';
import { uniCloudDownload, uniCloudUpload, uniCopy, uniSpin, uniEnter } from 'vue-unicons/src/icons';

import Vue from 'vue';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;
Unicon.add([uniCloudDownload, uniCloudUpload, uniCopy, uniSpin, uniEnter]);
Vue.use(Unicon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
