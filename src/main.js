/* eslint-disable no-new */
import Vue from 'vue';
import App from './App';
import $message from './components/message';
import $confirm from './components/confirm';

Vue.use($message);
Vue.use($confirm);

new Vue({
  el: '#app',
  name: 'Root',
  template: '<App/>',
  components: { App },
});
