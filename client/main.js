import './main.html';
import Vue from 'vue';
import App from './App'
// Vue.use(require('vue-shortkey'))
import {
  Meteor
} from 'meteor/meteor'

// import VueMeteorTracker from 'vue-meteor-tracker'
// Vue.use(VueMeteorTracker)
// Vue.config.meteor.freeze = true

//Router
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import routes from './router'
const router = new VueRouter({
  mode: 'history',
  routes 
})

// import store from './vueX/vuex'
// import {
//   store
// } from "./store";
import {
  store
} from './store2.js'
//import VueTify
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css';
// // font
// // import '@mdi/font/css/materialdesignicons.css'
// // import 'font-awesome/css/font-awesome.min.css'
Vue.use(Vuetify, {

})

// vueSax
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)
// import 'material-icons/iconfont/material-icons.css';

Meteor.startup(() => {
  new Vue({
    router,
    store,
    // store2,
    render: h => h(App)
  }).$mount('app')
})