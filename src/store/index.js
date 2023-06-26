import { axiosInstance } from '@/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    post: null,
    totalPost: 0,
    tag: ["all", "technology", "environment", "business", "politics"]
  },
  // getters: {
  // },
  mutations: {
    updatePost(state, payload) {
      state.post = payload
    },
    updateTotalPost(state, payload) {
      state.totalPost = payload
    },
  },
  actions: {
    async getAllPost(context) {
      const post = await axiosInstance.get("/post")
      context.commit("updatePost", post.data.data)
      context.commit("updateTotalPost", post.data.total)
      console.log("post is updated : ", context.state.post, context.state.totalPost)
    },
    async getPostByTag(context, payload) {
      if (payload === "all") {
        const post = await axiosInstance.get("/post")
        context.commit("updatePost", post.data.data)
        context.commit("updateTotalPost", post.data.total)
        console.log("post is updated : ", context.state.post, context.state.totalPost)
        return post
      }

      const post = await axiosInstance.get(`/tag/${payload}/post`)
      context.commit("updatePost", post.data.data)
      context.commit("updateTotalPost", post.data.total)
      console.log("post is updated : ", context.state.post, context.state.totalPost)
    },
  },
  // modules: {
  // }
})
