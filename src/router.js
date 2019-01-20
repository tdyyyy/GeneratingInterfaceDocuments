import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Project from './views/page/project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
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

      }]
    }
  ]
})
