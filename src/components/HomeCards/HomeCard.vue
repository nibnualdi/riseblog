<template>
  <div class="w-[190px] min-w-[190px] bg-[#EFEFEF] rounded-[20px] home-card">
    <img :src="image" :alt="titleComputed" class="w-[190px] h-[189px] object-cover rounded-t-[20px]">
    <div class="p-[14px] pb-[23px] pt-[7px]">
      <h4 class="text-[13px] font-semibold">{{ titleComputed }}</h4>
      <p class="text-[10px] font-normal">{{ desc }}</p>

      <div class="flex justify-between mt-[23.75px]">
        <div>
          <p class="text-[10px] text-[#424242] text-opacity-[39%]">{{ date }}</p>
          <div class="flex gap-[9px]">
            <div class="flex gap-[5px] text-[10px] text-[#1C1C1C]">
              {{ likes }}
              <img src="@/assets/icons/heart.svg" alt="heart">
            </div>
            <!-- <div class="flex gap-[5px] text-[10px] text-[#1C1C1C]">
              12
              <img src="@/assets/icons/chat.svg" alt="chat">
            </div> -->
          </div>
        </div>
        <Button bgColor="bg-[#3652E1]" color="text-[#FFFFFF]" widthAndHeight="w-[69px] h-[30px]" fontSize="text-[10px]" text="Read More" @click="handleButtonLinkReadMore" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "HomeCard",
  props: ["title", "desc", "image", "date", "likes"],
  components: {
    Button
  },
  setup(props) {
    const router = useRouter();
    const titleComputed = computed(()=> props.title.substring(0, 20))

    const handleButtonLinkReadMore = () => {
      router.push('/articles/1')
    }

    return { handleButtonLinkReadMore, titleComputed }
  }
}
</script>