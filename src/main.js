import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//引入VueRouter
import VueRouter from "vue-router"
Vue.use(VueRouter)

//引入ElementUI
import ElementUI from 'element-ui'
import '../theme/index.css'
Vue.use(ElementUI)

import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';






// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//     store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

require('es6-promise').polyfill()

import routes from './config/router/router.js';
//路由实例
const router = new VueRouter({
  routes
})

import user from './store/userinfo/';
import leftmenu from './store/leftmenu/';
import global from './store/global/';
import Router from './store/router/';
const store = new Vuex.Store({
    modules: {
        user,
        global,
        leftmenu,
        Router
    }
});



//开启debug模式
Vue.config.debug = true;

router.beforeEach((to, from, next) => {

    window.scroll(0, 0);
    if(to.path === '/') {
        next('/bns/user_manage_index')      
    }else{
        next()        
    }
    // var token = store.state.user.token
    // if(!token) {
    //     if(to.path !== '/login') {
    //         next('/login');
    //     }else {
    //         next()
    //     }
    // }else {
    //     if(to.path !== '/login') {
    //         $.post(testAPI.authToken, {
    //             token: token
    //         })
    //         .then(function(response) {
    //             if(response && response.success) {
    //                 NProgress.start(); 
    //                 if(to.path === '/') {
    //                     next('/bns/create_user')
    //                 }else {
    //                     next()
    //                 }                  
    //             }else {
    //                 MessageBox({
    //                     title: '提示',
    //                     message: 'token已过期,请重新登陆',
    //                     type: 'error',
    //                     callback: function() {
    //                         store.dispatch('remove_token').then(() => {
    //                             next('/login');
    //                         })                            
    //                     }
    //                 })
    //             }
    //         })
    //         .fail(function (error) {
    //             Message({
    //                 type: 'error',
    //                 message: '服务器请求失败'
    //             })
    //         });
    //     }else {
    //         $.post(testAPI.authToken, {
    //             token: token
    //         })
    //         .then(function(response){
    //             if(response && response.success) {
    //                 NProgress.start();                    
    //                 next('/bns')
    //             }else {
    //                 NProgress.start(); 
    //                 next()
    //             }
    //         })
    //         .fail(function (error) {
    //             Message({
    //                 type: 'error',
    //                 message: '服务器请求失败'
    //             })
    //         });
    //     }        
    // }
});

router.afterEach(transition => {
    NProgress.done();
});
import App from './App.vue'
const app = new Vue({
  store,
  router: router,
  render: h => h(App)
}).$mount('#app')












