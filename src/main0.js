// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//import the hello component
import Hello from '@/components/HelloWorld'
//import the about component
import About from '@/components/About'

import Header from '@/components/Header'
import ChooseRole from '@/components/chooseRole'
import SignUpBtn from '@/components/signUp'
import PopUp from '@/components/popUp'
import PopUp2 from '@/components/popUp2'
import SignInBtn from '@/components/signIn'
import Profile from '@/components/profile'
import PostJob from '@/components/postJob'
import PostJobPg from '@/components/postJobPg'
import HireNow from '@/components/hireNow'
import ViewJob from '@/components/viewJob'
import '@/components/firebaseInit';

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import VueForm from 'vue-form';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueMaterial)
//tell vue to use the router
Vue.use(VueRouter)

Vue.use(VueForm);

Vue.use(VueAxios, axios)
//define your routes
const routes = [
//route for the home route of the web page
{ path: '/', name:'home', component: ChooseRole },
//route for the about route of the web page
{ path: '/about', name:'about', component: About },
{ path: '/signIn', name:'signIn', component: SignInBtn},
{ path: '/signUp', name:'signUp', component: SignUpBtn},
{ path: '/profile', name:'profile', component: Profile},
{ path:'/postJob', name:'postJob', component:PostJob},
{ path:'/postJobPg', name:'postJobPg', component:PostJobPg},
{ path:'/hire', name:'hire',component:HireNow},
{ path:'/viewJob', name:'viewJob', component:ViewJob},

]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
