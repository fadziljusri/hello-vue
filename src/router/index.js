import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import DashboardPage from '@/components/DashboardPage'
import SettingsPage from '@/components/SettingsPage'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      redirect: {name: 'dashboardPage'},
      children: [
        {path: '', name: 'dashboardPage', component: DashboardPage},
        {path: 'settings', name: 'settingsPage', component: SettingsPage}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // and finally the default route, when none of the above matches:
    { path: "*", redirect: {name: 'dashboard'}  }
  ]
})
