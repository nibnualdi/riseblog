<template>
  <div class="flex gap-[31px] max-w-[700px] w-[50%] overflow-auto home-cards" @click="handleScroll">
    <div v-for="(newClass) in newClasses" :id="newClass" :class="{ show: currentElement === newClass }"
      class="home-card-container text-[10px]">
      <HomeCard />
    </div>
  </div>
</template>

<script>
import HomeCard from "@/components/HomeCards/HomeCard.vue"
import { onMounted, ref } from "vue";

export default {
  name: "HomeCards",
  components: {
    HomeCard
  },
  setup() {
    const newClasses = ref(["1", "2", "3", "4"])
    const currentElement = ref("")

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

    return { newClasses, currentElement }
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