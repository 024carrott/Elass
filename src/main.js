import Vue       from 'vue';
import VueRouter from 'vue-router';
import Vuex      from 'vuex';
import routes    from './routes';
import store     from './store';
import App       from './App';
 
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});


