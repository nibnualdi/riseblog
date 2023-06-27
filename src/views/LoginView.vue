<template>
  <div>
    <AuthCard name="Login" />
  </div>
</template>

<script>
import AuthCard from "@/components/AuthCard.vue"

export default {
  name: "LoginView",
  components: {
    AuthCard,
  }
}
</script>