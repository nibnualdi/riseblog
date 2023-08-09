<template>
  <div>
    <AuthCard name="Login" />
  </div>
</template>

<script>
import AuthCard from "@/components/AuthCard.vue"
import { useHead } from 'unhead'

export default {
  name: "LoginView",
  components: {
    AuthCard,
  },
  setup() {
    useHead({
      title: 'Riseblog | login'
    })
  }
}
</script>