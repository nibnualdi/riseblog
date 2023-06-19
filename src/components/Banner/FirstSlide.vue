<template>
  <section class="flex justify-center">
    <Circles />
    <div class="text-[90px] font-semibold text-[#1C1C1C] leading-[109px] grid grid-cols-5 px-[247px] py-[205px] max-w-[1460px]">
      <img src="@/assets/home/smiley-woman-with-headphones-working-laptop.png" alt="banner image" class="col-start-1 col-end-4 row-start-1 row-end-1">
      <div class="text-right col-start-3 col-end-6 row-start-1 row-end-1 flex flex-col items-end">
        <h1>Write Your</h1>
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5]">Article</h1>
        <h1>here</h1>
        <Button color="text-[#EFEFEF]" fontWeight="font-medium" fontSize="text-[15px]" bgColor="bg-[#3652E1]" widthAndHeight="w-[194px] h-[64px]" border="true" text="Create
          Account" @click="handleButtonLinkToSignUp" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Circles from "@/components/Circles/Circles.vue"
import Button from "@/components/Button.vue"
import { useRouter } from "vue-router";

export default {
  name: 'HomeView',
  components: {
    Circles,
    Button
  },
  setup() {
    const router = useRouter();

    const handleButtonLinkToSignUp = () => {
      router.push('/auth/signup')
    }

    return { handleButtonLinkToSignUp }
  }
}
</script>
