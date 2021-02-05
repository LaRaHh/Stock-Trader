import Vue from 'vue'
import Router from 'vue-router'


import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'
import Login from './components/Login'
import SignUp from './components/SignUp'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { 
            path: '*', 
            redirect: '/login' 
        },

        {   path: '/', 
            redirect: '/login' 
        },

        {   path: '/login', 
            component: Login
        },
        
        {
            path: '/signup', 
            component: SignUp
        },
        { 
            path: '/home', 
            component: Home, 
            meta: {
            requeresAuth: true
        }
        },
        
        { 
            path: '/portfolio', 
            component: Portfolio, 
            meta: {
            requeresAuth: true
        } 
        },
        
        { 
            path: '/stocks', 
            component: Stocks, 
            meta: {
            requeresAuth: true
        } 
        }
        
    ]
})

router.beforeEach((to, from, next) => {
    var requiresAuth = to.matched.some( record => record.meta.requiresAuth );
    var currentUser = false;
    // when route requires auth and there's no current user, reidrect to '/login'
    if(requiresAuth && !currentUser){
      next('/login');
    // when we go to login route and are already logged in, we can skip this page
    // so we redirect to the homepage
    } else if (to.path == '/login' && currentUser){
      next('/home');
    // if none of the above matches, we have a normal navigation that should just go through
    // so we call `next()`
    } else {
      next(); // you called `next('/')` which redirected to the homepage over and over again.
    }
  });

export default router