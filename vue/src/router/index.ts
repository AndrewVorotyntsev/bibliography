import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/edit',
    name: RouteNames.EDIT,
    component: HomePage
  },
  {
    path: '/edit/:id',
    name: RouteNames.BOOK_EDIT,
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
