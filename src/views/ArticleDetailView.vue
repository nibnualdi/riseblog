<template>
  <section class="p-[146px] flex justify-center gap-[75px]">
    <div class="hidden lg:block">
      <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5] text-[33px] font-bold mb-[5px]">For you</h1>
      <!-- <div class="relative mb-[17px]">
        <input type="text" name="search" placeholder="Search article..." class="w-[220px] h-[32px] bg-[#E8E8E8] outline-[#8E8E8E] rounded-[20px] pl-[31px] text-[12px] text-[#8E8E8E]">
        <img src="@/assets/icons/search.svg" alt="search" width="11" height="11" class="absolute top-[11px] left-[10px]">
      </div> -->

      <div class="flex flex-col gap-[9px]">
        <Card small="true" v-for="post in posts" :title="post.text" :image="post.image" :desc="post.text" :owner="post.owner" :tags="post.tags" date="asd" :likes="post.likes" :idPost="post.id"/>
      </div>
    </div>

    <div class="flex flex-col items-center max-w-[802px]">
      <h1 class="text-[33px] text-[#1C1C1C] font-bold leading-[39.94px] mb-[36px]">{{ titleComputed }}</h1>
      <div>
        <img :src="singlePost?.image" alt="article">
        <!-- <p class="text-[15px] text-[#8E8E8E] leading-[18.15px]">Neuralink logo displayed on a phone screen, a silhouette of a paper in shape of a human face and a binary code displayed on a screen are seen in this multiple exposure illustration photo taken in Krakow, Poland on December 10, 2021.</p> -->
      </div>
      <p class="max-w-[668px] text-justify mt-[57px]">{{ singlePost?.text }}</p>
    </div>
  </section>
  <Ovals2 />
</template>

<script>
import Card from "@/components/Card.vue"
import Ovals2 from "@/components/Ovals/Ovals2.vue"
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "ArticleLeftCards",
  components: {
    Card,
    Ovals2
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    
    onMounted(()=>{
      store.dispatch("getASinglePost", route.params.id)
      store.dispatch("getAllPost")
    })
    
    watch(route, ()=>{
      store.dispatch("getASinglePost", route.params.id)
    })

    const singlePost = computed(()=>store.state.singlePost)
    const titleComputed = computed(() => singlePost.value?.text?.substring(0, 20))
    
    const posts = computed(()=>store.state.post.slice(0,3))


    return { singlePost, titleComputed, posts }
  }
}
</script>