// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'
import Vuex from 'vuex'
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/style.css'

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(VueAxios,axios);
Vue.use(Vuex);
Vue.prototype.HOST = '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
