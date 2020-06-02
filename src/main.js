import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import firebase from 'firebase'
import VueYoutube from 'vue-youtube'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'

Vue.use(VueYoutube)
Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA3yieSUwZsc0ZaRiaz2CLN6DilgZ4VAfU',
  authDomain: 'mesharing-f417a.firebaseapp.com',
  databaseURL: 'https://mesharing-f417a.firebaseio.com',
  projectId: 'mesharing-f417a',
  storageBucket: 'mesharing-f417a.appspot.com',
  messagingSenderId: '223933714105',
  appId: '1:223933714105:web:a64483adfe5daae0b15568',
  measurementId: 'G-65V4KK58BF'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
