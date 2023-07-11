<template>
  <div>
    <AuthCard name="Sign Up" />
    <Modal />
  </div>
</template>

<script>
import AuthCard from "@/components/AuthCard.vue"
import Modal from "@/components/Modal.vue"

export default {
  name: "SignUpView",
  components: {
    AuthCard,
    Modal
  }
}
</script>