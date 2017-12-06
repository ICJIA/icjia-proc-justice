import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
//import Meta from 'vue-meta'

Vue.use(Router)
    //Vue.use(Meta)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        { path: '*', redirect: '/' }
    ]
})