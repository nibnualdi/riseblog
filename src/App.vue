<template>
  <Header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

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

/* page changes transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
