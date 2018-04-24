import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  TITLE: [
    ['/', '博客主页'],
    ['/article', '文章详情'],
    ['/public', '发布文章'],
    ['/message', '消息中心'],
    ['/user', '用户中心'],
    ['/user/signin', '用户登录'],
    ['/user/signup', '用户注册']
  ],
  USER_INFO: {
    name: '',
    gender: '',
    bio: '',
    avatar: ''
  }
}

export default new Vuex.Store({
  state,
  mutations
})
