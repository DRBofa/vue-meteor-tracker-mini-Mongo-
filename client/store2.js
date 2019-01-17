import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentBranch:'jziCEai7wBw6HGiCr',
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
    
   
    // setItemlist(state,data){
    //   return state.itemlist=data
    // },
    setItem(state,data){
       state.items=data
      store.getters.FillterbyBranch(state.currentBranch)
    },
      setBranch(state,data){
        return state.branches=data
      },
      SET_CURRENTBRANCH(state,data){
        return state.currentBranch=data
      }
  },
  actions: {
    setBranch(context,data){
        
        context.commit('setBranch',data)
      },
    setCurrentBranch(context,data){
        
        context.commit('SET_CURRENTBRANCH',data)
      },
    setItem(context,data){
      context.commit('setItem',data)
      
      },
   
      
    }
})