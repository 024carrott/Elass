import Vue from 'vue';
import App from './App';
import SignUp from './html/SignUp';
import SignUpComplete from './html/SignUpComplete';
import SignIn from './html/SignIn';
import List from './html/list';
import View from './html/view';
import Mypage from './html/mypage';
import Enrolled from './html/enrolled';
import Liked from './html/liked';
import History from './html/history';
import mypageRegisterclass from './html/mypage-registerclass';

new Vue({
  el: '#app',
  render: h => h(Liked)
});


