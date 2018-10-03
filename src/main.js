import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Must Have:
// A render function (for rendering to the DOM)
// 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
