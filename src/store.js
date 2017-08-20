import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LOGIN  = "LOGIN";
const LOGOUT = "LOGOUT";
const APIHOST = 'http://eb-yykdev-taling-dev.ap-northeast-2.elasticbeanstalk.com/'

const store = new Vuex.Store({
  state: {
    isLogIn: !!localStorage.getItem("login_token"),
    userInfo: 0,
    token: 'Token '+ localStorage.getItem("login_token"),
    member:{
      signup   : APIHOST+'member/signup/',
      signin   : APIHOST+'member/login/',
      fbsignin : APIHOST+'member/login/facebook/',
      profile  : APIHOST+'member/profile/'+this.userInfo+'/',
      changepwd: APIHOST+'member/change/password/'+this.userInfo+'/',
    },
    lecture:{
      list  : APIHOST+'regiclass/class/list/',
      detail: APIHOST+'regiclass/class/detail/',
      regist: APIHOST+'regiclass/class/make/',
      review: APIHOST+'regiclass/review/make/',
      like  : APIHOST+'regiclass/class/likeclass/',
    }
  },
  mutations: {
    [LOGIN] (state, userId) { 
      state.isLogIn = true; 
      state.userInfo = userId;
    },
    [LOGOUT](state) { state.isLogIn = false; }
  },
  actions: {
   login({ commit }, payload) {
      // if success login (get token)
      localStorage.setItem("login_token", payload.token);
      commit(LOGIN, payload.userid);
   },
   logout({ commit }) {
     localStorage.removeItem("login_token");
     commit(LOGOUT);
   },
  },
  getters: {
    isLogIn: state =>state.isLogIn,
    token: state=>state.token,
    userInfo: state=>state.userInfo,
  }
});
export default store;