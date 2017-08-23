import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const LOGIN  = "LOGIN";
const LOGOUT = "LOGOUT";
const APIHOST = 'http://eb-yykdev-taling-dev.ap-northeast-2.elasticbeanstalk.com/'

const store = new Vuex.Store({
  state: {
    isLogIn: !!localStorage.getItem("login_token"),
    userInfo: localStorage.getItem('user_info'),
    tutorInfo: localStorage.getItem('tutor_info'),
    token: 'Token '+ localStorage.getItem("login_token"),
    member:{
      signup   : APIHOST+'member/signup/',
      signin   : APIHOST+'member/login/',
      fbsignin : APIHOST+'member/login/facebook/',
      profile  : APIHOST+'member/profile/',
      changepwd: APIHOST+'member/change/password/',
      tutorup  : APIHOST+'member/tutor/register/'
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
    [LOGIN] (state, payload) { 
      state.isLogIn = true; 
      state.userInfo = payload.userid;
      state.tutorInfo = payload.tutorid;
    },
    [LOGOUT](state) { state.isLogIn = false; },
    TUTOR(state, payload){
      state.tutorInfo = payload;
    }
  },
  actions: {
   login({ commit }, payload) {
      // if success login (get token)
      localStorage.setItem("login_token", payload.token);
      localStorage.setItem("user_info", payload.userid);
      localStorage.setItem("tutor_info", payload.tutorid);
      commit(LOGIN, payload);
   },
   logout({ commit }) {
     localStorage.removeItem("login_token");
     localStorage.removeItem("user_info");
     localStorage.removeItem("tutor_info");
     commit(LOGOUT);
   },
   tutorSet({commit}, payload){
     commit('TUTOR', payload);
   }
  },
  getters: {
    isLogIn: state =>state.isLogIn,
    token: state=>state.token,
    userInfo: state=>state.userInfo,
    tutorInfo: state=>state.tutorInfo,
  }
});
export default store;