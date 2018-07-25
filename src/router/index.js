// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Header from '@/components/Header'
import Home from '@/components/chooseRole'
import SignUp from '@/components/signUp'
import PopUp from '@/components/popUp'
import PopUp2 from '@/components/popUp2'
import Login from '@/components/signIn'
import Profile from '@/components/profile'
import PostJob from '@/components/postJob'
import PostJobPg from '@/components/postJobPg'
import HireNow from '@/components/hireNow'
import ViewJob from '@/components/viewJob'
import firebase from 'firebase';
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp//,
      //meta: {
      //  requiresGuest: true
      //}
    },
    { path: '/profile', name:'Profile', component: Profile,
          meta: {
            requiresAuth: true
          }
    },
    { path:'/postJob', name:'PostJob', component:PostJob,
          meta: {
            requiresAuth: true
          }
    },
    { path:'/postJobPg', name:'PostJobPage', component:PostJobPg,
          meta: {
            requiresAuth: true
          }
    },
    { path:'/hire', name:'Hire',component:HireNow,
          meta: {
            requiresAuth: true
          }
    },
    { path:'/viewJob', name:'ViewJob', component:ViewJob,
          meta: {
            requiresAuth: true
          }
    }

    /*{
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        requiresAuth: true
      }
    }*/
  ]
});

/*let router = new Router({
  [

{ path: '/',
  name:'home',
  component: ChooseRole,
  meta: {
        requiresAuth: true
      }
 },
{ path: '/signIn',
  name:'signIn',
  component: SignInBtn,
  meta: {
        requiresGuest: true
      }
},
{ path: '/signUp', name:'signUp', component: SignUpBtn,
      meta: {
        requiresGuest: true
      }
},
{ path: '/profile', name:'profile', component: Profile,
      meta: {
        requiresAuth: true
      }
},
{ path:'/postJob', name:'postJob', component:PostJob,
      meta: {
        requiresAuth: true
      }
},
{ path:'/postJobPg', name:'postJobPg', component:PostJobPg,
      meta: {
        requiresAuth: true
      }
},
{ path:'/hire', name:'hire',component:HireNow,
      meta: {
        requiresAuth: true
      }
},
{ path:'/viewJob', name:'viewJob', component:ViewJob,
      meta: {
        requiresAuth: true
      }
}

]});*/

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
