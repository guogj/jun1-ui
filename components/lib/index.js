import Demo from './demo';
import Card from './card';
import Star from './star';
import Banner from './banner'
import Loading from './loading'
import Tip from './tip'
import Select from './select'
const components = {
  Demo,
  Card,
  Star,
  Banner,
  Loading,
  Tip,
  Select
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