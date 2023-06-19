<template>
  <div class="w-[190px] min-w-[190px] bg-[#EFEFEF] rounded-[20px] home-card">
    <img src="@/assets/cards/neuralink.jpg" alt="neuralink" class="w-[190px] h-[189px] object-cover rounded-t-[20px]">
    <div class="p-[14px] pb-[23px] pt-[7px]">
      <h4 class="text-[13px] font-semibold">Elon Musk shows off updates to his brain chips</h4>
      <p class="text-[10px] font-normal">Elon Musk’s health tech venture Neuralink shared updates to its brain...</p>

      <div class="flex justify-between mt-[23.75px]">
        <div>
          <p class="text-[10px] text-[#424242] text-opacity-[39%]">10h ago</p>
          <div class="flex gap-[9px]">
            <div class="flex gap-[5px] text-[10px] text-[#1C1C1C]">
              32
              <img src="@/assets/icons/heart.svg" alt="heart">
            </div>
            <div class="flex gap-[5px] text-[10px] text-[#1C1C1C]">
              12
              <img src="@/assets/icons/chat.svg" alt="chat">
            </div>
          </div>
        </div>
        <Button bgColor="bg-[#3652E1]" color="text-[#FFFFFF]" widthAndHeight="w-[69px] h-[30px]" fontSize="text-[10px]" text="Read More" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"

export default {
  name: "HomeCard",
  components: {
    Button
  }
}
</script>