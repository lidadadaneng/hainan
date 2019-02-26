import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Wise Wrong',
    msg:'',
    api_url:"http://134.175.61.17:18082",
    Myrep:'',
    Histories:'',
    Myifo:'',
    repurl:'',
    serlist:'',
    accountInfo:{
    },
    cusId:'020000002883',

  },
  mutations:{

    newMsg (state,msg){
      state.msg =msg
    },
    Histories(state,Histories){
      state.Histories =Histories
    },
    Myifo(state,Myifo){
      state.Myifo =Myifo
    },
    Myrep(state,Myrep){
      state.Myrep =Myrep
    },
    repurl(state,repurl){
      state.repurl =repurl
    },
    serlist(state,serlist){
      state.serlist =serlist
    }
  },


});
/*for(var item in state){
  localStorage.getItem(item)?state[item] = JSON.parse(localStorage.getItem(item)): false;
}*/

export default store
