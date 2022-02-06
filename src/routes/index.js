import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Keyword from './Keyword'
import NotFound from './NotFound'

export default createRouter({
  // Hash, History
  // Hash - https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  // pages
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/keyword',
      component: Keyword
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})