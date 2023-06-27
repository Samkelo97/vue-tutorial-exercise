import { createStore } from 'vuex'

export default createStore({
  state: {
    tutorials:null,
    tutorial:null,


  },

  mutations: {
    setTutorials:(state,tutorials)=>{
      state.tutorials = tutorials;
    },
    setTutorial:(state,tutorial)=>{
      state.tutorial = tutorial;
    },
  },
  actions: {
    getTutorials:async(context) => {
      fetch("http://localhost:3000/tutorials")
      .then((res) => res.json())
      .then((tutorials) => context.commit("setTutorials",tutorials));
    },
    
    getTutorial:async(context, id) => {
      fetch("http//localhost:3000/tutorials/" + id)
      .then((res) => res.json())
      .then((tutorial) => context.commit("setTutorial",tutorial));
    },
  },
});
