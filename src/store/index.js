import { axiosInstance } from '@/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    post: {
      posts: [],
      isLoading: false
    },
    sortedPostByLikes: {
      posts: [],
      isLoading: false
    },
    totalPost: 0,
    tag: ["all", "technology", "environment", "business", "politics"],
    selectedTag: "all",
    singlePost: {
      post: null,
      isLoading: false
    }
  },
  // getters: {
  // },
  mutations: {
    updatePost(state, payload) {
      payload.forEach(element => {
        state.post.posts.push(element)
      });
    },
    clearPost(state) {
      state.post.posts = []
    },
    updateIsLoadingPost(state, payload) {
      state.post.isLoading = payload
    },
    updateSortedPostByLikes(state, payload) {
      state.sortedPostByLikes.posts = payload
    },
    updateIsLoadingSortedPostByLikes(state, payload) {
      state.sortedPostByLikes.isLoading = payload
    },
    updateTotalPost(state, payload) {
      state.totalPost = payload
    },
    updateSinglePost(state, payload) {
      state.singlePost.post = payload
    },
    updateIsLoadingSinglePost(state, payload) {
      state.singlePost.isLoading = payload
    },
    updateSelectedTag(state, payload) {
      state.selectedTag = payload
      console.log("selectedTag is updated : ", state.selectedTag)
    }
  },
  actions: {
    async getAllPost(context, { page=0 } = {}) {
      context.commit("updateIsLoadingPost", true)
      console.log("isLoading is updated : ", context.state.post.isLoading)

      try {
        const post = await axiosInstance.get(`/post?page=${page}`)
        context.commit("updatePost", post.data.data)
        context.commit("updateTotalPost", post.data.total)
        context.commit("updateIsLoadingPost", false)
        console.log("post is updated : ", context.state.post, context.state.totalPost)
      } catch {
        context.commit("updateIsLoadingPost", false)
        console.log("post is updated : ", context.state.post, context.state.totalPost)
      }

    },
    async getPostByTag(context, { category, page=0 }) {
      context.commit("updateIsLoadingPost", true)
      console.log("isLoading is updated : ", context.state.post.isLoading)

      try {
        if (category === "all") {
          const post = await axiosInstance.get(`/post?page=${page}`)
          context.commit("updatePost", post.data.data)
          context.commit("updateTotalPost", post.data.total)
          context.commit("updateIsLoadingPost", false)
          console.log("post is updated : ", context.state.post, context.state.totalPost)
          return post
        }
  
        const post = await axiosInstance.get(`/tag/${category}/post?page=${page}`)
        context.commit("updatePost", post.data.data)
        context.commit("updateTotalPost", post.data.total)
        context.commit("updateIsLoadingPost", false)
        console.log("post is updated : ", context.state.post, context.state.totalPost)
      } catch {
        context.commit("updateIsLoadingPost", false)
        console.log("post is updated : ", context.state.post, context.state.totalPost)
      }

    },
    async getSortedPostByLikes (context) {
      context.commit("updateIsLoadingSortedPostByLikes", true)
      console.log("isLoading is updated : ", context.state.sortedPostByLikes.isLoading)

      try {
        const post = await axiosInstance.get(`/post?page=0`)
        const sortedPost = post.data.data.sort((a, b) => {
          return b.likes - a.likes
        })

        context.commit("updateSortedPostByLikes", sortedPost)
        context.commit("updateIsLoadingSortedPostByLikes", false)
        console.log("sortedPostByLikes is updated : ", context.state.sortedPostByLikes)
      } catch {
        context.commit("updateIsLoadingSortedPostByLikes", false)
        console.log("sortedPostByLikes is updated : ", context.state.sortedPostByLikes)
      }
    },
    async getASinglePost(context, payload) {
      context.commit("updateIsLoadingSinglePost", true)
      console.log("single post is updated : ", context.state.singlePost.isLoading)
      
      try {
        const post = await axiosInstance.get(`/post/${payload}`)
        context.commit("updateSinglePost", post.data)
        context.commit("updateIsLoadingSinglePost", false)
        console.log("single post is updated : ", context.state.singlePost)
      } catch {
        context.commit("updateIsLoadingSinglePost", false)
        console.log("single post is updated : ", context.state.singlePost)
      }

    },
  },
  // modules: {
  // }
})
