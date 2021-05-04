import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos:[],
    searchTodoItems:[]
  },
  getters:{
    getTodos: state => state.todos,
    getSearchTodos:state=>state.searchTodoItems 
  },
  mutations: {
    ADD_TODO:(state,payload) => {
      const yeniItem = {
        id:payload.id,
        name:payload.name,
        durum:payload.durum

      };
      state.todos.push(yeniItem);
      
    },
    DELETE_TODO: (state,payload)=>{
      state.todos = state.todos.filter(x=>x.id !== payload);
      state.searchTodoItems = state.searchTodoItems.filter(x=>x.id !== payload);
    },
    UPDATE_TODO: (state,payload)=>{
      var index = state.todos.findIndex(x=>x.id === payload.id);
      state.todos[index].name = payload.name;
      state.todos[index].durum = payload.durum; 

      var index2 = state.searchTodoItems.findIndex(x=>x.id === payload.id);
      state.searchTodoItems[index2].name = payload.name;
      state.searchTodoItems[index2].durum = payload.durum; 
    },
    SEARCH_TODO: (state,payload) => {
     state.searchTodoItems = state.todos.filter(x=>x.name === payload);
    }
  },
  actions: {
    addTodo: (context,payload) =>{
      context.commit("ADD_TODO",payload);
    },
    deleteTodo : (context,payload) => {
      context.commit("DELETE_TODO",payload);
    },
    updateTodo : (context,payload) => {
      context.commit("UPDATE_TODO",payload);
    },
    searchTodo : (context,payload) => {
      context.commit("SEARCH_TODO",payload);
    }
  },
  modules: {},
});
