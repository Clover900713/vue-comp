import Vue from 'vue'
import App from './App'
import VueComp from './index.js'

Vue.use(VueComp)

new Vue({
  el: '#app',
  render: h => h(App)
})
