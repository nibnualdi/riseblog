<template>
  <div>
    <Banner />
    <BestArticles />
    <Subscribe />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue"
import BestArticles from "@/components/BestArticles.vue"
import Subscribe from "@/components/Subscribe.vue"
import { useHead } from 'unhead'

export default {
  name: 'HomeView',
  components: {
    Banner,
    BestArticles,
    Subscribe
  },
  setup() {
    useHead({
      title: 'Riseblog | home'
    })
  }
}
</script>
