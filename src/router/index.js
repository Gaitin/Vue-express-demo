import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/mainComponents/HomeComponent.vue'
import FindMainComponent from '@/components/mainComponents/FindMainComponent.vue'
import sendMainComponent from '@/components/mainComponents/sendMainComponent.vue'
import ownCenterComponent from '@/components/mainComponents/ownCenterComponent.vue'
import AboutUsComponent from '@/components/mainComponents/AboutUsComponent.vue'

import InfoComponent from '@/components/subComponents/InfoComponent.vue'

import Hello from '@/components/Hello.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent,
      children: [
        {
          path: '/FindMain',
          component: FindMainComponent
        },
        {
          path: '/sendMain',
          component: sendMainComponent
        },
        {
          path: '/ownCenter',
          component: ownCenterComponent
        }
      ]
    },
    {
      path:'/Info',
      name:'Info',
      component:InfoComponent
    },
    {
      path:'/About',
      name:'About',
      component:AboutUsComponent
    }
  ]
})
