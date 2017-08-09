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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) && !store.getters.isLogin) {
      window.alert('로그인이 필요합니다.');
      next("/signin");
  } else {
      next();
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});