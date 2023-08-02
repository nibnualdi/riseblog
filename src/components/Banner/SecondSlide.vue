<template>
  <section class="flex justify-center">
    <Ovals />
    <div class="text-[90px] font-semibold text-[#1C1C1C] leading-[109px] flex flex-col justify-center items-center lg:grid lg:grid-cols-2 gap-[30px] px-3 lg:px-[247px] py-[189px] w-[max(1460px,80%)]">
      <div class="flex flex-col max-w-[550px] col-start-1 col-end-2 justify-self-end">
        <h1>Find Your</h1>
        <h1>Best</h1>
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5]">Article</h1>
        <h1>Topics here</h1>
      </div>
      <OvalCards class="col-start-2 col-end-3 justify-self-start" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import OvalCards from "@/components/OvalCards/OvalCards.vue"
import Ovals from "@/components/Circles/Ovals.vue"

export default {
  name: 'HomeView',
  components: {
    OvalCards,
    Ovals
  }
}
</script>
