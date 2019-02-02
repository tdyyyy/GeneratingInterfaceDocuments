import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Project from './views/page/project.vue'
import ProjectEdit from './views/page/project_edit.vue'
import InterfaceAdd from './views/page/interface_add.vue'
import Test from './views/page/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
      path: '/project',
      name: 'home',
      component: Home,
      children: [{
          path: '/project',
          name: 'project',
          component: Project
      }, {
          path: '/project/project_edit',
          name: 'project_edit',
          component: ProjectEdit
      }, {
          path: '/project/interface_add',
          name: 'interface_add',
          component: InterfaceAdd
      }, {
          path: '/test',
          name: 'test',
          component: Test

      }]
    }
  ]
})
