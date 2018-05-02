import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Garden from '@/components/Garden'
import record from '@/components/garden/record'
import remind from '@/components/garden/remind'
import collec from '@/components/garden/collec'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    { path: '/', redirect: '/Garden' },
    {
      path: '/Garden',
      name: 'Garden',
      component: Garden
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/remind',
      name: 'remind',
      component: remind
    },
    {
      path: '/collec',
      name: 'collec',
      component: collec
    }
  ]
})
