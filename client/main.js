import './main.html';
import Vue from'vue';
import App from './App'
// Vue.use(require('vue-shortkey'))
import {Meteor} from 'meteor/meteor'


import VueMeteorTracker from 'vue-meteor-tracker'
Vue.use(VueMeteorTracker)
Vue.config.meteor.freeze = true

Meteor.startup(()=>{
  new Vue({
    render: h => h(App)
  }).$mount('app')
})