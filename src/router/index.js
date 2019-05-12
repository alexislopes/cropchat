import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomeView'
import Details from '@/components/DetailsView'
import Post from '@/components/PostView'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post
    },
  ]
})
