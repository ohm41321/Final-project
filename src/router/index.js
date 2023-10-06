import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Dev from '../views/Dev.vue'
import MainPage from '../views/MainPage.vue'
import priceView from '../views/priceView.vue'
import course from '../views/courseView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/dev',
      name: 'dev',
      component: Dev
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: priceView
    },
    {
      path: '/course/:id',
      name: 'course',
      component: course
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }


  ]
})


export default router
