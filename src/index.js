import CompDemo from './CompDemo';

const VueComp = {
  install(Vue, options) {
    Vue.component(CompDemo.name, CompDemo);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueComp);
}

export default VueComp;
