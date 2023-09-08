<template>
  <section class="pt-[135px] px-8 lg:px-[146px] min-h-full flex flex-col gap-5">

    <div class="flex justify-between items-center">
      <h1 class="text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5]">Your
        Articles</h1>
      <button
        class="flex items-center gap-2 lg:w-fit text-white bg-[#8057F5] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 h-14"
        @click="handleLinkToAddArticle">
        <div class="w-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <p class="whitespace-nowrap hidden lg:block">Make a post</p>
      </button>
    </div>
    <h1 v-if="!userPosts.length && !userPostsIsLoading" class="mx-auto mt-48">You haven't posted anything yet</h1>
    <div class="w-6 h-6 m-auto" v-if="userPostsIsLoading">
      <Spinner />
    </div>
    <div
      class="block lg:flex items-center justify-between bg-transparent border border-gray-200 rounded-lg shadow w-full hover:bg-[#3652E1] group transition-all"
      v-for="post in userPosts">
      <div class="block lg:flex">
        <img class="object-cover w-full lg:w-40 rounded-t-lg lg:rounded-none lg:rounded-l-lg hover:cursor-pointer" :src="post.image" alt=""
          @click="handleButtonLinkReadMore(post.id)">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gray-100 hover:cursor-pointer"
            @click="handleButtonLinkReadMore(post.id)">{{ post.text }}</h5>
          <p class="mb-3 font-normal text-gray-400">
            {{ post.text }}</p>
          <div>
            <span
              class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300 hover:cursor-pointer"
              v-for="tag in post.tags" @click="handleChangeSelectedTag(tag)">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="flex gap-1 m-3 lg:mr-10 justify-end lg:justify-start">
        <div class="w-[50px] rounded-md bg-blue-600  hover:bg-blue-800 text-white p-3 hover:cursor-pointer" @click="handleButtonToEditPage(post.id)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </div>
        <a href="#popup-modal">
          <div class="w-[50px] rounded-md bg-red-800 hover:bg-gray-700 text-white p-3 hover:cursor-pointer"
            @click="handleDelete(post)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
        </a>
      </div>
    </div>

    <!-- modal -->
    <div id="popup-modal" tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 hidden target:block p-4 lg:inset-0 h-[calc(100%-1rem)] max-h-full overflow-hidden">
      <div class="relative w-full h-screen">
        <div
          class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-lg shadow bg-gray-700">
          <div class="p-6 text-center">
            <svg class="mx-auto mb-4 w-12 h-12 text-gray-200" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 class="text-lg font-normal text-gray-400">Are you sure you want to delete this
              product?</h3>
            <p class="mb-5">{{ selectedPost.text }}</p>
            <button data-modal-hide="popup-modal" type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              @click="handleDeleteSubmit(selectedPost)">
              Yes, I'm sure
            </button>
            <a href="#">
              <button data-modal-hide="popup-modal" type="button"
                class="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">No,
                cancel</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->

  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { useHead } from 'unhead'

import Spinner from '@/components/Loading/Spinner.vue';

export default {
  name: "YourArticle",
  components: {
    Spinner,
  },
  setup() {
    const CONSTANS = [1, 2, 3, 4, 5]
    const store = useStore()
    const router = useRouter()

    const userPosts = computed(() => store.state.postByUser.post)
    const userPostsIsLoading = computed(() => store.state.postByUser.isLoading)

    const selectedPost = ref({})

    useHead({
      title: 'Riseblog | your articles'
    })

    onMounted(() => {
      const userData = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : ""
      store.commit("clearPostByUser")
      store.dispatch("getPostByUser", userData.id)

      // clear route
      router.push("/my-articles")
    })

    const handleButtonLinkReadMore = (idPost) => {
      // store.dispatch("getASinglePost", idPost)
      router.push(`/articles/${idPost}`)
    }

    const handleChangeSelectedTag = (tag) => {
      router.push(`/articles/category/${tag}`)
      store.commit("clearPost")
    }
    
    const handleButtonToEditPage = (id) => {
      router.push(`/edit-article/${id}`)
    }

    const handleDelete = (post) => {
      selectedPost.value = post
    }

    const handleDeleteSubmit = ({ id }) => {
      try {
        store.dispatch("deletePost", id)

        const newPost = userPosts.value.filter((post) => {
          return post.id !== id
        })
        store.commit("clearPostByUser")
        store.commit("updatePostByUser", newPost)
        location.href = "#"
      } catch (error) {
        console.log(error)
      }
    }

    const handleLinkToAddArticle = () => {
      router.push(`/add-article`)
    }

    return { CONSTANS, userPosts, handleButtonLinkReadMore, handleChangeSelectedTag, handleButtonToEditPage, handleDelete, handleDeleteSubmit, selectedPost, handleLinkToAddArticle, userPostsIsLoading }
  }
}
</script>