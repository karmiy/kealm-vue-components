import Vue from 'vue';
import App from './app.vue';
import router from './router';
import KmyUI from '@kealm/vue-components'
import '@kealm/vue-components/style/salus.min.css'

Vue.use(KmyUI)
/*import KmyUI from '@kealm/vue-components'
import '@kealm/style/dist/vue'

Vue.use(KmyUI)*/
//import '@salus/vue-components/style/salus.css'
/*** 导入页面样式*/
import './assets/styles.scss';
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)


Vue.config.devtools = true;

new Vue({
    el: '#app',
    router,
    components: {
        App
    }
})
