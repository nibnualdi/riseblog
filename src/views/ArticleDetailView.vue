<template>
  <div>
    <section class="p-[146px] flex justify-center gap-[75px]">
      <div class="hidden lg:block">
        <h1
          class="bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5] text-[33px] font-bold mb-[5px]">
          For you</h1>
        <!-- <div class="relative mb-[17px]">
          <input type="text" name="search" placeholder="Search article..." class="w-[220px] h-[32px] bg-[#E8E8E8] outline-[#8E8E8E] rounded-[20px] pl-[31px] text-[12px] text-[#8E8E8E]">
          <img src="@/assets/icons/search.svg" alt="search" width="11" height="11" class="absolute top-[11px] left-[10px]">
        </div> -->

        <div class="flex flex-col gap-[9px]">
          <Skeleton small="true" v-if="isLoadingPost" />
          <Skeleton small="true" v-if="isLoadingPost" />
          <Skeleton small="true" v-if="isLoadingPost" />
          <Card small="true" v-for="post in posts" :title="post.text" :image="post.image" :desc="post.text"
            :owner="post.owner" :tags="post.tags" date="asd" :likes="post.likes" :idPost="post.id" />
        </div>
      </div>

      <Spinner v-if="isLoadingSinglePost" class="w-full max-w-[802px]" />
      <div v-if="!isLoadingSinglePost" class="flex flex-col items-center max-w-[802px]">
        <div class="flex w-full justify-between">
          <div class="flex items-center gap-2 max-w-[294px]">
            <div>
              <img :src="singlePost.owner?.picture" alt="owner" width="30" height="30" class="border-[3px] border-[#3652E1] rounded-full" v-if="singlePost.owner?.picture">
              <div v-if="!singlePost.owner?.picture" class="w-[30px] h-[30px] flex justify-center items-center text-[12px] border-[3px] border-[#3652E1] rounded-full">
                <p>{{ `${singlePost.owner?.firstName[0]}${singlePost.owner?.lastName[0]}` }}</p>
              </div>
            </div>
            <p class="text-[#1C1C1C] text-[19px]">{{ `${singlePost.owner?.firstName} ${singlePost.owner?.lastName}` }}</p>
          </div>

          <!-- like feature -->
          <!-- not created yet, the api still not ready yet (the same account still can like a post more than once) -->
          <!-- <div class="flex gap-1 text-[#1C1C1C] cursor-pointer opacity-60">
            <p>Like</p>
            <img src="@/assets/icons/heart.svg" alt="heart" width="13" height="13">
          </div> -->
          <!-- like feature -->

        </div>
        <h1 class="text-[33px] text-[#1C1C1C] font-bold leading-[39.94px] mb-[36px]">{{ titleComputed }}</h1>
        <div>
          <img :src="singlePost?.image" alt="article">
          <!-- <p class="text-[15px] text-[#8E8E8E] leading-[18.15px]">Neuralink logo displayed on a phone screen, a silhouette of a paper in shape of a human face and a binary code displayed on a screen are seen in this multiple exposure illustration photo taken in Krakow, Poland on December 10, 2021.</p> -->
        </div>
        <p class="max-w-[668px] text-justify mt-[57px]">{{ singlePost?.text }}</p>
      </div>
    </section>
    <Ovals2 />
  </div>
</template>

<script>
import Card from "@/components/Card.vue"
import Ovals2 from "@/components/Ovals/Ovals2.vue"
import Skeleton from "@/components/Loading/Skeleton.vue"
import Spinner from "@/components/Loading/Spinner.vue"
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useHead } from 'unhead'
import { axiosInstance } from "@/axios";

export default {
  name: "ArticleLeftCards",
  components: {
    Card,
    Ovals2,
    Skeleton,
    Spinner
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    const singlePost = ref({})
    const titleComputed = computed(() => singlePost.value?.text?.substring(0, 20))

    const posts = computed(() => store.state.post.posts.slice(0, 3))
    
    const isLoadingPost = computed(() => store.state.post.isLoading)
    const isLoadingSinglePost = ref(false)

    useHead({
      title: `Riseblog | ${titleComputed}`
    })

    onMounted(() => {
      !posts.value.length && store.dispatch("getAllPost")

    })
    
    onMounted(async()=>{
      isLoadingSinglePost.value = true
      
      try {
        const post = await axiosInstance.get(`/post/${route.params.id}`)
        singlePost.value = post.data
        isLoadingSinglePost.value = false
      } catch {
        isLoadingSinglePost.value = false
      }
    })

    return { singlePost, titleComputed, posts, isLoadingPost, isLoadingSinglePost }
  }
}
</script>