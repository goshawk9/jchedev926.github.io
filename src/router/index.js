import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/portfolio/',
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
})

export default router
