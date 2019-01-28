import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Project from './views/page/project.vue'
import Test from './views/page/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
          path: '/project',
          name: 'project',
          component: Project

      }, {
          path: '/test',
          name: 'test',
          component: Test

      }]
    }
  ]
})
