<template>
  <section class="pt-[135px] px-[146px] min-h-full flex flex-col gap-5">
    
    <h1 class="text-[50px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5]">Your
      Articles</h1>
    <div
      class="flex items-center justify-between bg-transparent border border-gray-200 rounded-lg shadow w-full hover:bg-[#3652E1] group transition-all"
      v-for="post in userPosts">
      <div class="flex">
        <img class="object-cover w-40 rounded-none rounded-l-lg hover:cursor-pointer" :src="post.image" alt=""
          @click="handleButtonLinkReadMore(post.id)">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gray-100 hover:cursor-pointer"
            @click="handleButtonLinkReadMore(post.id)">{{ post.text }}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ post.text }}</p>
          <div>
            <span
              class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 hover:cursor-pointer"
              v-for="tag in post.tags" @click="handleChangeSelectedTag(tag)">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="flex gap-1 mr-10">
        <div class="w-[50px] rounded-md bg-blue-600  hover:bg-blue-800 text-white p-3 hover:cursor-pointer">
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
      class="fixed top-0 left-0 right-0 z-50 hidden target:block p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-6 text-center">
            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this
              product?</h3>
            <p>{{ selectedPost.text }}</p>
            <button data-modal-hide="popup-modal" type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              Yes, I'm sure
            </button>
            <a href="#">
              <button data-modal-hide="popup-modal" type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
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

export default {
  name: "YourArticle",
  components: {
    // Card
  },
  setup() {
    const CONSTANS = [1, 2, 3, 4, 5]
    const store = useStore()
    const router = useRouter()

    const userPosts = computed(() => store.state.postByUser.post)
    const userPostsIsLoading = computed(() => store.state.postByUser.isLoading)

    const selectedPost = ref({})

    onMounted(() => {
      const userData = JSON.parse(Cookies.get("user"))
      store.dispatch("getPostByUser", userData.id)

      // clear route
      router.push("/my-articles")
    })

    const categoryParams = computed(()=> {return route.params.category})

    console.log(categoryParams, "categoryParams")

    const handleButtonLinkReadMore = (idPost) => {
      store.dispatch("getASinglePost", idPost)
      router.push(`/articles/${idPost}`)
    }

    const handleChangeSelectedTag = (tag) => {
      router.push(`/articles/category/${tag}`)
      store.commit("clearPost")
    }

    const handleDelete = (post) => {
      console.log(post)
      selectedPost.value = post
      console.log("delete")
    }

    return { CONSTANS, userPosts, handleButtonLinkReadMore, handleChangeSelectedTag, handleDelete, selectedPost }
  }
}
</script>