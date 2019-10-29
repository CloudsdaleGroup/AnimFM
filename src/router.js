import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/request',
      name: 'Request',
      component: () => import(/* webpackChunkName: "about" */ './views/request.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "about" */ './views/contact.vue')
    },
    {
      path: '/staff',
      name: 'Staff',
      component: () => import(/* webpackChunkName: "about" */ './views/staff.vue')
    },
    {
      path: '/popup/radio',
      name: 'AnimeFM - Popup',
      component: () => import(/* webpackChunkName: "about" */ './views/popup.vue')
    },
    {
      path: '/popup/CloudsdaleRadio',
      name: 'Cloudsdale Radio - Popup',
      component: () => import(/* webpackChunkName: "about" */ './views/popupCR.vue')
    },
    {
      path: '/prototype',
      name: 'Cloudsdale Radio - Popup',
      component: () => import(/* webpackChunkName: "about" */ './views/prototype.vue')
    }
  ]
})
