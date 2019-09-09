import Vue from 'vue';
import App from './App.vue';
import './components/core/register';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
