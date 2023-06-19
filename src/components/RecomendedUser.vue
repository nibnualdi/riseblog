<template>
  <div class="flex justify-between items-center mt-[17px]">
    <div class="flex gap-[9px] items-center">
      <img src="@/assets/home/tech.png" alt="profile" width="30" height="30" class="border border-[#3652E1] border-[3px] rounded-[12px] w-[30px] h-[30px] object-cover">
      <p class="text-[14px] text-[#1C1C1C] font-semibold">Joana Marie Jones</p>
    </div>
    <Button widthAndHeight="w-[55px] h-[23px]" bgColor="bg-[#3652E1]" color="text-[#EFEFEF]" fontSize="text-[8px]"
      text="Follow" fontWeight="font-semibold" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
  name: "RecomendedUser",
  components: {
    Button,
  }
}
</script>