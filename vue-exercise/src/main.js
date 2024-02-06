import Vue from 'vue'
import App from './App.vue'
// export시 default가 있어야 import가 가능하고 안했다면 {}로 대체 가능하다
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
