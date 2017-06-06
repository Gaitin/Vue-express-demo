import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/mainComponents/HomeComponent.vue'
import Hello from '@/components/Hello.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})
