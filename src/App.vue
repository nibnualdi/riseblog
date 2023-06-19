<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "App",
  components: { Header, Footer }
}
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: #EFEFEF;
  overflow-x: hidden;
}
</style>
