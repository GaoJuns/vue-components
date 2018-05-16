// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Plugins from './utils/glPlugin.js'
import GlComponent from './components/index.js'
import './styles/common.css'

Vue.config.productionTip = false

Vue.use(GlComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
