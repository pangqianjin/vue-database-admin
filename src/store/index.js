import Vue from 'vue'
import Vuex from 'vuex'
import {connectPg, disconnectPg, queryPg} from '../utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentConnected: '',//当前正在连接的数据库地址
    recentConnected: [],// 最近连接过的数据库地址
    err: '',
    result: []
  },
  getters: {
    currentConnected: state=>state.currentConnected || sessionStorage.getItem('currentConnected'),//当前正在连接的数据库地址
    recentConnected: state=>state.recentConnected,// 最近连接过的数据库地址
    err: state=>state.err,
    result: state=>state.result
  },
  mutations: {
    // 从localStorage中获取最近连接过的数据库地址
    setRecentConnectedFromLocalStorage(state){
      const recentConnected = localStorage.getItem('recentConnected');
      state.recentConnected = JSON.parse(recentConnected) || [];
    },
    // 连接某一个数据库地址
    async connectDB(state, {addr}){
      // 清除state.err
      state.err = ''
      // 尝试连接数据库
      const err = await connectPg(addr)
      if(err){
        state.err = err
      }else{
        state.currentConnected = addr// 设置当前数据库连接地址
        sessionStorage.setItem('currentConnected', JSON.stringify(addr))
        const nopasswordAddr = addr.replace(/(?<=.*:\/\/.*:).*(?=@.*:.*\/.*)/, '******')
        if(!state.recentConnected.some(address=>address===nopasswordAddr)){// 如果当前连接的地址不在最近连接列表中
          const recentConnected = JSON.parse(localStorage.getItem('recentConnected')) || []
          state.recentConnected = [...recentConnected, nopasswordAddr]// 放入当前数据库连接地址
          localStorage.setItem('recentConnected', JSON.stringify(state.recentConnected))
        }
      }
    },
    query(state, {queryString}){
      state.err = ''
      const result = queryPg(queryString)
      console.log(result)
      // if(err){
      //   state.err = err
      // }else{
      //   state.result = result
      // }
    }
  },
  actions: {
    // 从localStorage中获取最近连接过的数据库地址
    setRecentConnectedFromLocalStorage({commit}){
      commit('setRecentConnectedFromLocalStorage')
    },
    // 连接某一个数据库地址
    connectDB({commit}, {addr}){
      commit('connectDB', {addr})
    },
    query({commit}, {queryString}){
      commit('query', {queryString})
    }
  }
})
