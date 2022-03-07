import Tip from './src/main.vue'

Tip.install = function(Vue) {
  Vue.component(Tip.name, Tip);
}

export default Tip