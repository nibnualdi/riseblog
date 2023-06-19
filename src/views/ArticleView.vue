<template>
  <div class="flex justify-center gap-[91px]">
    <LeftCardSection />
    <RightCardSection />
    <Ovals2 />
  </div>
</template>

<script>
import LeftCardSection from "@/components/LeftCardSection.vue"
import RightCardSection from "@/components/RightCardSection.vue"
import Ovals2 from "@/components/Ovals/Ovals2.vue"

export default {
  name: "ArticleView",
  components: {
    LeftCardSection,
    RightCardSection,
    Ovals2
  }
}
</script>