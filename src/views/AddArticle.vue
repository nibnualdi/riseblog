<template>
  <FormArticle />
</template>

<script>
import FormArticle from '@/components/FormArticle.vue';
import { useHead } from 'unhead'

export default {
  name: "AddArticle",
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