import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/endpoints',
    name: 'endpoints',
    component: () => import('../views/endpoints/Endpoints')
  },
  {
    path: '/endpoints/new',
    name: 'endpointsCreate',
    component: () => import('../views/endpoints/CreateEndpoint')
  },
  {
    path: '/endpoints/design/:id',
    name: 'endpointsDesign',
    component: () => import('../views/endpoints/DesignEndpoint')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
