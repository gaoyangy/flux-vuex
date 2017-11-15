import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/todo'
import routerMap from './router/router'
import 'babel-polyfill'
import App from './Todo.vue'
// import actions from './store/actions'
// import mutations from './store/mutations'
// import getters from './store/getters'
// import state from './store/state'
Vue.config.devtools = true
Vue.use(VueRouter)

let router = new VueRouter({
  routes: routerMap
})

// let store =  new Vuex.Store({
//   state,
//   actions,
//   getters,
//   mutations
// })

let app = new Vue({
  el: '#app',
  router,
  store,
})

export default app