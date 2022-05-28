import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Axios from "axios";

Vue.config.productionTip = false;

Axios.defaults.baseURL = process.env.VUE_APP_ADMIN_ENDPOINT;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
