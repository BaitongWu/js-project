import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Mainbox from '../views/Mainbox.vue'
import RoutesConfig from './config.js'
import store from '../store/index.js'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: Mainbox
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    } else {
      if(!store.state.isGetterRouter){
        ConfigRouter()
        next({
          path: to.fullPath
        })
      }else{
        next()
      }
    }
  }
})

const ConfigRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute("mainbox",item)
  })
  store.commit('changeGetterRouter',true)
}


export default router