/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');



import VueRouter from 'vue-router';
import {router} from "./routes";
import authorization from "NitsModels/_auth";
import store from "./store/_store";
import adminLayout from './components/Admin';

const auth = new authorization();

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.prototype.$auth = auth;

require('./components');

/**
 * Middleware to check authentication
 */

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && auth.isLoggedIn())
        next()
    if(!to.meta.requiresAuth && auth.isLoggedIn())
        next()
    if(to.meta.requiresAuth && !auth.isLoggedIn())
        next({path: '/'})
    if(!to.meta.requiresAuth && !auth.isLoggedIn())
        next()
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const admin = new Vue({
    el: '#admin',
    router: router,
    store,
    render:h=>h(adminLayout)
});
