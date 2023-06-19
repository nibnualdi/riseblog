<template>
  <Banner />
  <BestArticles />
  <Subscribe />
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue"
import BestArticles from "@/components/BestArticles.vue"
import Subscribe from "@/components/Subscribe.vue"

export default {
  name: 'HomeView',
  components: {
    Banner,
    BestArticles,
    Subscribe
  }
}
</script>
