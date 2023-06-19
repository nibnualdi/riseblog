<template>
  <section class="pt-[179px] flex-col items-center gap-[26px] hidden lg:flex">
    <Button widthAndHeight="w-[194px] h-[50.51px]" bgColor="bg-[#3652E1]" color="text-[#EFEFEF]" fontSize="text-[12px]" text="Create Account" fontWeight="font-semibold" />
    <div class="w-[338px] h-[298px] bg-[#FFFFFF] rounded-[12px] p-[19px]">
      <p class="text-[13px] text-[#1C1C1C] font-semibold">Trending</p>
      <div class="flex flex-col gap-[12px] mt-[14px]">
        <Card trending="true" />
        <Card trending="true" />
        <Card trending="true" />
        <Card trending="true" />
      </div>
    </div>
    <div class="w-[338px] h-[246px] bg-[#FFFFFF] rounded-[12px] p-[19px]">
      <p class="text-[13px] text-[#1C1C1C] font-semibold">Recomended Users</p>
      <RecomendedUser />
      <RecomendedUser />
      <RecomendedUser />
      <RecomendedUser />
    </div>
  </section>
</template>

<script>
import Button from "@/components/Button.vue"
import Card from "@/components/Card.vue"
import RecomendedUser from "@/components/RecomendedUser.vue"

export default {
  name: "RightCardSection",
  components: {
    Button,
    Card,
    RecomendedUser
  }
}
</script>