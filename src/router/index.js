import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Main from '../views/Main.vue'
import QueryResult from '../views/QueryResult.vue'
import LoadingResult from '../views/LoadingResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Start
  },
  {
    path: '/connected',
    component: Main,
    children: [
      { path: '', component: LoadingResult},
      { path: 'result', component: QueryResult}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
