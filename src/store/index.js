import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    accounts:[]
  },
  mutations: {
    SET_ACCOUNTS_TO_STATE: (state, accounts) => {
      state.accounts = accounts;
    }
  },
  actions: {
    GET_ACCOUNTS_FROM_API({commit}){
      return axios('http://localhost:3000/accounts',{
        method: "GET"
      }) 
      .then((accounts) =>{
        commit('SET_ACCOUNTS_TO_STATE', accounts.data);
        return accounts;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
    }
  },
  getters: {
    ACCOUNTS(state){
      return state.accounts;
    }
  },
  modules: {}
});

export default store;