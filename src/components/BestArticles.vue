<template>
  <section
    class="w-[100%] h-[813px] bg-gradient-154 from-[#3652E1] to-[#8057F5] text-[#1C1C1C] text-[90px] font-semibold flex justify-center items-center">
    <div class="relative w-full h-[813px] flex gap-[96px] justify-center items-center flex-col lg:flex-row">
      <Ovals />
      <div class="text-4xl lg:text-[90px]">
        <h1>Best</h1>
        <h1 class="text-[#EFEFEF] inline-block mr-px lg:block lg:mr-0">Article</h1>
        <h1 class="inline-block lg:block">Today</h1>
        <Button color="text-[#3652E1]" fontWeight="font-medium" fontSize="text-[15px]" bgColor="bg-[#EFEFEF]"
          widthAndHeight="w-[194px] h-[64px]" border="true" text="Create
          Account" @click="handleButtonLinkToSignUp" v-if="!isAuth" />
      </div>
      <HomeCards />
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue"
import HomeCards from "@/components/HomeCards/HomeCards.vue"
import Ovals from "@/components/Ovals/Ovals.vue"
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "BestArticles",
  components: {
    Button,
    HomeCards,
    Ovals
  },
  setup() {
    const router = useRouter();
    const store = useStore()
    const isAuth = computed(() => store.state.isAuth)

    const handleButtonLinkToSignUp = () => {
      router.push('/auth/signup')
    }

    return { handleButtonLinkToSignUp, isAuth }
  }
}
</script>