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
    getTutorials:async function (context) {
      fetch("https://Samkelo97.github.io/data/db.json")
        .then((res) => res.json())
        .then((tutorials) => context.commit("setTutorials", tutorials));
    },
    
    getTutorial:async(context, id) => {
      fetch("https://Samkelo97.github.io/data/db.json/" + id)
      .then((res) => res.json())
      .then((tutorial) => context.commit("setTutorial",tutorial));
    },
  },
});
