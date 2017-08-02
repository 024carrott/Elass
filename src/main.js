import Vue from 'vue';
import App from './App';
import List from './html/list';

new Vue({
  el: '#app',
  render: h => h(List)
});