import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      count: 0,
      branches: [{
        name: 'Florida',
        place: 'FL'
      },
      {
        name: 'Georgia',
        place: 'GA'
      },
      {
        name: 'Nebraska',
        place: 'NE'
      },
      {
        name: 'California',
        place: 'CA'
      },
      {
        name: 'New York',
        place: 'NY'
      }
    ],
      todos: [
        { id: 1, text: 'Mama', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    getters:{
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      }
    },
    mutations: {
      increment (state, n) {     
            state.count += n   
      },
      addDodo(state,data){
        return state.todos.push(data)
      }
    },
    actions: {
      addDodo(context,data){
        console.log(data);
        context.commit('addDodo',data)
      },
      increment (context,n) {
        context.commit('increment',n)
      }
    }
  })
