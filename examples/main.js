import Vue from 'vue'
import App from './App.vue'

import 'jun1-ui/dist/css/index.css';
// 调用npm jun1-ui
// import JUNUI from 'jun1-ui';
// Vue.use(JUNUI);

// 调用本地
import API from '../components/lib/index'
API.install(Vue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
