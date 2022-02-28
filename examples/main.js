import Vue from 'vue'
import App from './App.vue'

import 'jun1-ui/dist/css/index.css';
import JUNUI from 'jun1-ui';
Vue.use(JUNUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
