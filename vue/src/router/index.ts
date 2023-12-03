import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import { RouteNames } from './routes'
import EditPage from "@/components/pages/EditPage.vue";
import EditBookPage from "@/components/pages/EditBookPage.vue";

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
    component: EditPage
  },
  {
    path: '/edit/:id',
    name: RouteNames.BOOK_EDIT,
    component: EditBookPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
