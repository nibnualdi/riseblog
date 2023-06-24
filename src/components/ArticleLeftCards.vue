<template>
  <div class="flex flex-col gap-[12px] mb-[142px]">
    <Card v-for="post in posts" name="post" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue"
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ArticleLeftCards",
  components: {
    Card
  },
  setup() {
    const store = useStore();
    
    const posts = computed(()=> store.state.post)

    return { posts }
  }
}
</script>