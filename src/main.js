import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Row, Col, Container, Aside, Main,
  Input, Button, Notification
} from 'element-ui'
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)

Vue.config.productionTip = false
Vue.prototype.$notify = Notification

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
