import Demo from './demo';
import Card from './card';
import Star from './star';
import Banner from './banner'
const components = {
  Demo,
  Card,
  Star,
  Banner
};
const install = function (Vue) {
  if(install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
}

const API = {
  install,
};

export default API;