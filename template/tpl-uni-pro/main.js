import Vue from 'vue'
import uma from './uma'
import '@/style/index.scss'

import App from './App'
import store from '@/store/index'
import mini from '@/utils/mini'
import mixins from '@/utils/mixins'
import api from '@/api/index'

Vue.config.productionTip = false
App.mpType = 'app'


Vue.use(uma)
Vue.prototype.$store = store
Vue.prototype.$api = api

for (const key in mini) {
  Vue.prototype[`$${key}`] = mini[key]
}

Vue.mixin(mixins)

const app = new Vue({
  store,
  ...App,
})
app.$mount()
