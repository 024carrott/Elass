import Vue from 'vue';
import App from './App';
import List from './html/list';
import View from './html/view';
import Mypage from './html/mypage';

new Vue({
  el: '#app',
  render: h => h(View)
});