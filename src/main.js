// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
import App from './App'
import firebase from 'firebase';
import '@/components/firebaseInit';
import VueForm from 'vue-form';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import router from './router';
Vue.use(VueMaterial)
Vue.use(VueForm);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
  }
});

/*let app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount("#app");
*/
