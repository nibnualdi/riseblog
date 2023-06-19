<template>
  <div class="grid pb-[63px]">
    <component :is="components[selectedIndex - 1]" />
    <div class="flex justify-center gap-[58px]">
      <button @click="handlePrevNext((-1))"><img src="@/assets/icons/leftArrow.svg" alt="leftArrow"></button>
      <button @click="handlePrevNext(1)"><img src="@/assets/icons/rightArrow.svg" alt="rightArrow"></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstSlide from "@/components/Banner/FirstSlide.vue"
import SecondSlide from "@/components/Banner/SecondSlide.vue"
import { ref } from "vue"

export default {
  name: 'Banner',
  components: {
    FirstSlide,
    SecondSlide
  },
  setup() {
    const components = ['FirstSlide', 'SecondSlide']
    let selectedIndex = ref(1)

    const handlePrevNext = (n) => {
      hanldeIndex(selectedIndex.value += n)
    }

    const hanldeIndex = (n) => {
      if (n > components.length) { selectedIndex.value = 1 }
      if (n < 1) { selectedIndex.value = components.length }
    }

    return { components, selectedIndex, handlePrevNext }
  }
}
</script>
