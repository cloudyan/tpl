import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app.js'
import user from './modules/user.js'
// import location from './modules/location.js'
// import popup from './modules/popup.js'
// import cart from './modules/cart.js'
// import address from './modules/address.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    app,
    user,
    // cart,
    // address,
    // location,
    // popup,
  },
})
