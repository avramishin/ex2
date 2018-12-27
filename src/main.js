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
import AuthChangePassword from './components/Auth/ChangePassword.vue'
import AuthRegistration from './components/Auth/Registration.vue'
import Wallets from './components/Wallets/Wallets.vue'
import WalletHistory from './components/Wallets/History.vue'
import Exchange from './components/Exchange/Exchange.vue'
import Deposit from './components/Wallets/Deposit.vue'
import Withdraw from './components/Wallets/Withdraw.vue'

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.use(Api, {
  baseurl: "https://api.tradehummingbird.com"
});

const router = new VueRouter({
  routes: [{
      path: '/auth',
      component: Auth
    },

    {
      path: '/auth/reset',
      component: AuthReset
    },
    {
      path: '/auth/change/password',
      component: AuthChangePassword
    },
    {
      path: '/auth/registration',
      component: AuthRegistration
    },
    {
      path: '/wallets/list',
      component: Wallets
    },
    {
      path: '/wallets/history/:currency',
      component: WalletHistory
    },
    {
      path: '/exchange/:currency',
      component: Exchange
    },
    {
      path: '/wallets/deposit/:currency',
      component: Deposit
    },
    {
      path: '/wallets/withdraw/:currency',
      component: Withdraw
    }
  ]
});

window.VueApp = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
