<template>
  <Header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <Toast text="token copied to your clipboard." status="success" :isOpen="isTokenCopiedSignup" />
  
  <Toast :text="successMassagePostArticle" status="success" :isOpen="successMassagePostArticle.length" />
  <Toast :text="errMassagePostArticle" status="failed" :isOpen="errMassagePostArticle.length" />

  <Footer />
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Toast from "./components/Toast.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "App",
  components: { Header, Footer, Toast },
  setup() {
    const store = useStore()
    const isTokenCopiedSignup = computed(() => store.state.signup.isTokenCopied)
    const successMassagePostArticle = computed(() => store.state.postArticle.successMessage)
    const errMassagePostArticle = computed(() => store.state.postArticle.errorMessage)

    return {
      isTokenCopiedSignup,
      successMassagePostArticle,
      errMassagePostArticle,
    }
  }
}
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

body {
  background: #EFEFEF;
  overflow-x: hidden;
  height: 100%;
}

#app {
  height: 100%;
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
