import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnime from 'vue-animejs'

Vue.use(VueAnime)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
