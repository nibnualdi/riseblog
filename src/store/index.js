import { axiosInstance } from '@/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    post: null,
    tag: ["all", "technology", "environment", "business", "politics"]
  },
  // getters: {
  // },
  mutations: {
    updatePost(state, payload) {
      state.post = payload
    },
  },
  actions: {
    async getAllPost(context) {
      const post = await axiosInstance.get("/post")
      context.commit("updatePost", post.data.data)
      console.log("post is updated : ", context.state.post)
    },
    async getPostByTag(context, payload) {
      if (payload === "all") {
        const post = await axiosInstance.get("/post")
        context.commit("updatePost", post.data.data)
        console.log("post is updated : ", context.state.post)
        return post
      }

      const post = await axiosInstance.get(`/tag/${payload}/post`)
      context.commit("updatePost", post.data.data)
      console.log("post is updated : ", context.state.post)
    },
  },
  // modules: {
  // }
})
