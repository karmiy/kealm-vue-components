import Vue from 'vue';
import Router from 'vue-router'
import Home from '../views/home/home'
import routes from '../components/router'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/component/quickstart'
        },
        {
            path: '/component', /* 组件库 */
            component: () => import('../views/component-view/component-view'),
            children: [...routes]
        }
    ]
})
