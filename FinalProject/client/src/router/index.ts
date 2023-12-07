import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { getSession } from '@/model/session';
import signView from '../views/signView.vue';
import searchView from '../views/searchView.vue';
import myActivity from '../views/myActivityView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        { 
            path: "/login", 
            name: "login", 
            component: LoginView 
          },
          {
            path: '/myActivity',
            name: 'myActivity',
            component: myActivity,
            beforeEnter: requireLogin
          },
          {
            path: '/peopleSearch',
            name: 'peopleSearch',
            component: searchView,
          },
          {
            path: '/signup',
            name: 'signup',
            component: signView,
          }
    ]
})

function requireLogin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  
    const session = getSession();
    if(!session.user){
      session.redirectUrl = to.fullPath;
      next('/login');
    }else{
      next();
    }
}
  
export default router