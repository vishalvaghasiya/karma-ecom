import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*import owl from '../public/js/owl.carousel.min.js';*/


Vue.config.productionTip = false
/*Vue.use(owl);*/

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
