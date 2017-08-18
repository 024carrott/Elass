import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LOGIN  = "LOGIN";
const LOGOUT = "LOGOUT";
const APIHOST = 'http://eb-yykdev-taling-dev.ap-northeast-2.elasticbeanstalk.com/'

const store = new Vuex.Store({
  state: {
    isLogIn: !!localStorage.getItem("login_token"),
    member:{
      signup   : APIHOST+'member/signup/',
      signin   : APIHOST+'member/login/',
      fbsignin : APIHOST+'member/login/facebook/',
      profile  : APIHOST+'member/profile/'+localStorage.getItem("login_token")+'/',
      changepwd: APIHOST+'member/change/password/'+localStorage.getItem("login_token")+'/',
    },
    lecture:{
      list  : 'http://eb-yykdev-taling-dev.ap-northeast-2.elasticbeanstalk.com/regiclass/class/list/',
      detail: 'http://eb-yykdev-taling-dev.ap-northeast-2.elasticbeanstalk.com/regiclass/class/detail/',
      review: 'http://eb-yykdev-taling-dev.ap-northeast-2.elasticbeanstalk.com/regiclass/review/make/',
    }
  },
  mutations: {
    [LOGIN] (state) { state.isLogIn = true; },
    [LOGOUT](state) { state.isLogIn = false; }
  },
  actions: {
   login({ commit }, payload) {
      // if success login (get token)
      localStorage.setItem("login_token", payload);
      commit(LOGIN);
   },
   logout({ commit }) {
     localStorage.removeItem("login_token");
     commit(LOGOUT);
   }
  },
  getters: {
    isLogIn: state =>state.isLogIn,
  }
});
export default store;