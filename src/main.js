// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// Dont need it
// import 'firebase/messaging'
// import 'firebase/storage'

Vue.use(
  Vuelidate,
  Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Configuration
    var config = {
      apiKey: "AIzaSyBU0v_m6TM2kp8T4foUFQ9tPIBis3ieiJ4",
      authDomain: "film-library-95a85.firebaseapp.com",
      databaseURL: "https://film-library-95a85.firebaseio.com",
      projectId: "film-library-95a85",
      storageBucket: "film-library-95a85.appspot.com",
      messagingSenderId: "835083673249",
      appId: "1:835083673249:web:df03af3fe039dea5da1ae0",
      measurementId: "G-CD9C3LKYQQ"
    }
    // Firebase Initialize
    firebase.initializeApp(config)

    // Auth Check
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Check Logged
        this.$store.dispatch('loggedUser', user)
        // Loading All Tasks
        this.$store.dispatch('loadTasks')
        // Loading All Tags
        this.$store.dispatch('loadTags')
        console.log(this.$store.getters.message.title)
      }
    })
  }
})
