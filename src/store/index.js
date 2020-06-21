import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: sessionStorage.getItem("state")
    ? JSON.parse(sessionStorage.getItem("state"))
    : {
        userId: 0,
        userList: [],
      },
  mutations: {
    setUserId(state, payload) {
      state.userId = payload.userId;
    },
    addUser(state, payload) {
      state.userList.push(payload.name);
      console.log(state.userList);
    },
  },
  actions: {
    useMutationAddUser({ commit }, payload) {
      commit("addUser", payload);
      //actions的第一个参数context包含以下属性：state，rootState，commit，dispatch，getters
    },
  },
  modules: {},
});
