import Star from './src/main.vue'

Star.install = function(Vue) {
  Vue.component(Star.name, Star);
}

export default Star