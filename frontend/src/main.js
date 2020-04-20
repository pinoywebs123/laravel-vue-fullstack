import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { routes } from './routes';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import StoreData from './store';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',

});

const store = new Vuex.Store(StoreData);

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';


axios.interceptors.request.use(config => {
  config.headers.common['Authorization'] = "Bearer "+JSON.parse(localStorage.getItem("token"));
  config.headers.get['Accepts'] = 'application/json';
  return config;
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
