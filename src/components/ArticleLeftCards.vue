<template>
  <div class="flex flex-col gap-[12px]">
    <Card v-for="post in posts" :image="post.image" :title="post.text" :desc="post.text" :owner="post.owner"
      :tags="post.tags" :date="getStringDateFormat(post.publishDate)" :likes="post.likes" :idPost="post.id" />
    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Spinner from "@/components/Loading/Spinner.vue";
import { getStringDateFormat } from "@/utils/getStringDateFormat";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ArticleLeftCards",
  components: {
    Card,
    Spinner
  },
  setup() {
    const store = useStore();

    const posts = computed(() => store.state.post.posts)
    const isLoading = computed(() => store.state.post.isLoading)

    return { posts, getStringDateFormat, isLoading }
  }
}
</script>