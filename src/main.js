import Vue       from 'vue';
import VueRouter from 'vue-router';
import Vuex      from 'vuex';
import routes    from './routes';
import store     from './store';
import App       from './App';
 
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  // 페이지 변경 시 스크롤 최상단으로 이동
  scrollBehavior: function(to){
    if (to.hash){
      return {
        selector: to.hash
      }
    } else {
      return {x: 0, y: 0}
    }
  },
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});


