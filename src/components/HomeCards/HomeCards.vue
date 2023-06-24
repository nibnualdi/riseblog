<template>
  <div class="flex gap-[31px] max-w-[700px] w-[50%] overflow-auto home-cards" @click="handleScroll">
    <div v-for="(post) in posts" :id="post.id" :class="{ show: currentElement === post.id }"
      class="home-card-container text-[10px]">
      <HomeCard :title="post.text" :desc="post.text" :image="post.image" :date="getStringDateFormat(post.publishDate)" :likes="post.likes" />
    </div>
  </div>
</template>

<script>
import HomeCard from "@/components/HomeCards/HomeCard.vue"
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { getStringDateFormat } from "@/utils/getStringDateFormat"

export default {
  name: "HomeCards",
  components: {
    HomeCard
  },
  setup() {
    const currentElement = ref("")

    const store = useStore()
    const posts = computed(()=> store.state.post)

    // get posts from api
    onMounted(()=>{
      store.dispatch("getAllPost")
    })

    onMounted(() => {
      const homeCard = document.querySelectorAll(".home-card-container")
      const container = document.querySelector(".home-cards")

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) return
          currentElement.value = entry.target.getAttribute('id')
        })
      }, {
        root: container,
        rootMargin: "-160px"
      })

      homeCard.forEach((element) => {
        observer.observe(element)
      })
    })

    return { currentElement, posts, getStringDateFormat }
  }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.home-cards::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.home-cards {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.home-card-container {
  transform: scale(100%);
  transition: all 500ms;
}

.show {
  transform: scale(90%);
}
</style>