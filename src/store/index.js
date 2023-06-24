import { axiosInstance } from '@/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    post: null
  },
  // getters: {
  // },
  mutations: {
    updatePost(state, payload) {
      state.post = payload
    }
  },
  actions: {
    async updatePost(context) {
      const post = await axiosInstance.get("/post")
      context.commit("updatePost", post.data.data)
      console.log("post is updated : ", context.state.post)
    }
  },
  // modules: {
  // }
})
