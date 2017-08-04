import Vue from 'vue';
import App from './App';
import SignUp from './html/SignUp';
import SignUpComplete from './html/SignUpComplete';
import SignIn from './html/SignIn';

new Vue({
  el: '#app',
  render: h => h(SignUp),
  // render: h => h(SignUpComplete),
  // render: h => h(SignIn),
});