import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    accounts:[],
    posts:[]
  },
  mutations: {
    SET_ACCOUNTS_TO_STATE: (state, accounts) => {
      state.accounts = accounts;
    },
    SET_POSTS_TO_STATE: (state, posts) => {
      state.posts = posts;
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
    },

    GET_POSTS_FROM_API({commit}){
      return axios('http://localhost:3000/posts',{
        method: "GET"
      }) 
      .then((posts) =>{
        commit('SET_POSTS_TO_STATE', posts.data);
        return posts;
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
    },
    POSTS(state){
      return state.posts;
    }
  },
  modules: {}
});

export default store;