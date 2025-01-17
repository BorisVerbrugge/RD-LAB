import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
