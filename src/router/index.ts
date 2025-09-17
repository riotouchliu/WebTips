import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/APPMoreView.vue'),
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../views/DetailsView.vue'),
    },
    {
      path: '/hot',
      name: 'Hot',
      component: () => import('../views/HotView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
    }
  ],
})

export default router
