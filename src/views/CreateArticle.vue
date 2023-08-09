<template>
  <section class="p-[146px] min-h-[90vh]">
    <FormArticle />
  </section>
</template>

<script>
import FormArticle from "@/components/FormArticle.vue"
import { useHead } from 'unhead'

export default {
  name: "CreateArticle",
  components: {
    FormArticle
  },
  setup() {
    useHead({
      title: 'Riseblog | create'
    })
  }
}
</script>