import Banner from './src/main.vue'
Banner.install = function(Vue) {
  Vue.component(Banner.name, Banner);
}

export default Banner