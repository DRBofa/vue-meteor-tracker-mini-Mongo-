import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    branches: [],
    items: [],
    itemlist:[],
  },
  getters: {
    FillterbyBranch:(state) => (id) => {
      let data =[]
    state.items.forEach(doc => {
      if(doc.branchId==id){
        data.push(doc)
      }
    });
    return state.itemlist=data
    }
  },
  mutations: {
    // getBranch (state) {     

    // },
    // setItemlist(state,data){
    //   return state.itemlist=data
    // },
    setItem(state,data){
      return state.items=data
    },
      setBranch(state,data){
        return state.branches=data
      }
  },
  actions: {
    setBranch(context,data){
        
        context.commit('setBranch',data)
      },
    setItem(context,data){
        
        context.commit('setItem',data)
      },
    // FillterbyBranch(id){
    //   console.log('Action '+id);
    //    store.getters.FillterbyBranch(id)
    //   },
    
  }
})