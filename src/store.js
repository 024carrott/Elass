import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LOGIN  = "LOGIN";
const LOGOUT = "LOGOUT";

const store = new Vuex.Store({
  state: {
    isLogIn: !!localStorage.getItem("login_token")
  },
  mutations: {
    [LOGIN] (state) {
      state.isLogIn = true;
    },
    [LOGOUT](state) {
      state.isLogIn = false;
    }
  },
  actions: {
   login({ commit }, payload) {
      // if success login (get token)
      localStorage.setItem("login_token", "getToken");
      commit(LOGIN);
   },
   logout({ commit }) {
     localStorage.removeItem("login_token");
     commit(LOGOUT);
   }
  },
  getters: {
    isLogIn: state =>state.isLogIn
  }
});
export default store;