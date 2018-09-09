import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'cryptofont/css/cryptofont.css'

import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Api from './plugins/Api.js';

import Auth from './components/Auth/Auth.vue'
import AuthReset from './components/Auth/Reset.vue'
import Wallets from './components/Wallets/Wallets.vue'

import Exchange from './components/Exchange/Exchange.vue'
import History from './components/History/History.vue'

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(Api, {
    baseurl: "http://babylonia.tradehummingbird.com"
});

const router = new VueRouter({
    routes: [
        {
            path: '/auth',
            component: Auth
        },
        {
            path: '/auth/reset',
            component: AuthReset
        },
        {
            path: '/wallets/list',
            component: Wallets
        }
    ]
});

window.VueApp = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
