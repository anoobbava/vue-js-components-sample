import Vue from 'vue'
import App from './App.vue'
// import Status from './StatusComponent.vue'
import Home from './Home.vue'

Vue.component('my-home-component', Home)
new Vue({
  el: '#app',
  render: h => h(App)
})
