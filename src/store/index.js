import { axiosInstance } from '@/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    post: [],
    totalPost: 0,
    tag: ["all", "technology", "environment", "business", "politics"]
  },
  // getters: {
  // },
  mutations: {
    updatePost(state, payload) {
      payload.forEach(element => {
        state.post.push(element)
      });
    },
    clearPost(state) {
      state.post = []
    },
    updateTotalPost(state, payload) {
      state.totalPost = payload
    },
  },
  actions: {
    async getAllPost(context, { page=0 } = {}) {
      const post = await axiosInstance.get(`/post?page=${page}`)
      context.commit("updatePost", post.data.data)
      context.commit("updateTotalPost", post.data.total)
      console.log("post is updated : ", context.state.post, context.state.totalPost)
    },
    async getPostByTag(context, { category, page=0 }) {
      if (category === "all") {
        const post = await axiosInstance.get(`/post?page=${page}`)
        context.commit("updatePost", post.data.data)
        context.commit("updateTotalPost", post.data.total)
        console.log("post is updated : ", context.state.post, context.state.totalPost)
        return post
      }

      const post = await axiosInstance.get(`/tag/${category}/post?page=${page}`)
      context.commit("updatePost", post.data.data)
      context.commit("updateTotalPost", post.data.total)
      console.log("post is updated : ", context.state.post, context.state.totalPost)
    },
  },
  // modules: {
  // }
})
