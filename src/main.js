import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnime from 'vue-animejs'
import VueScrollTo from 'vue-scrollto'
import store from './store'

Vue.use(VueAnime)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
