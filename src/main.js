import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Row, Col, Container, Aside, Main, Header,
  Input, Button, Notification, Skeleton, SkeletonItem,
  Table, TableColumn
} from 'element-ui'
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Skeleton.name, Skeleton)
Vue.component(SkeletonItem.name, SkeletonItem)
Vue.component(Header.name, Header)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

Vue.config.productionTip = false
Vue.prototype.$notify = Notification

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
