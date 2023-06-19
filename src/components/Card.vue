<template>
  <div :class="`${sizes.containerWidth} ${sizes.containerHeight} ${padding.container}`"
    class="flex gap-[14px] bg-white rounded-[12px]">
    <img src="@/assets/articles/img1.jpg" alt="img" :width="sizes.imgWidth" :height="sizes.imgHeight">
    <div class="flex flex-col justify-between">
      <div>
        <h1 :class="`${sizes.titleWidth} ${trending || small ? 'text-[10px] font-medium' : 'text-[11px] font-semibold'}`" class="text-[#1C1C1C]">
          The overlooked benefits of real Christmas trees
        </h1>
        <p class="w-[223px] text-[10px] text-[#424242]" v-if="!small && !trending">
          The environmental pros and cons of Christmas trees go far beyond the...
        </p>
      </div>
      <div :class="small || trending ? 'w-full flex justify-between' : ''">
        <div class="flex items-center mb-[7px]">
          <img src="@/assets/articles/profile.jpg" alt="img" width="15" height="15" class="rounded-[15px] mr-[3px]">
          <p class="text-[10px] text-[#1C1C1C] mr-[5px]">Rey</p>
          <img src="@/assets/icons/star.svg" alt="star" width="7.88" height="7.93" v-if="!trending">
        </div>
        <div :class="small || trending ? 'w-auto' : 'w-[259px]'" class="flex justify-between">
          <div class="flex gap-[7px]">
            <p class="h-[16px] bg-[#00B33D] text-[#EFEFEF] text-[8px] rounded-[15px] flex justify-center items-center px-[12px]"
              v-for="topic in TOPICS" v-if="!small">
              {{ topic.name }}
            </p>
            <p class="h-[16px] bg-[#00B33D] text-[#EFEFEF] text-[8px] rounded-[15px] flex justify-center items-center px-[12px] mr-[5px]"
              v-if="small">
              {{ TOPICS[TOPICS.length - 1].name }}
            </p>
            <p class="text-[10px] text-[#42424263] opacity-[89%]" v-if="trending">12h ago</p>
          </div>
          <div class="flex items-center gap-[9px]" v-if="!small && !trending">
            <div class="flex gap-[5px]">
              <p class="text-[10px] text-[#1C1C1C] font-semibold">21</p>
              <img src="@/assets/icons/heart.svg" alt="star" width="11" height="10">
            </div>
            <div class="flex gap-[5px]">
              <p class="text-[10px] text-[#1C1C1C] font-semibold">21</p>
              <img src="@/assets/icons/chat.svg" alt="chat" width="11" height="10">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between items-end">
      <p class="text-[10px] text-[#42424263] opacity-[89%]" v-if="!small && !trending">12h ago</p>
      <Button text="Read More" widthAndHeight="w-[76px] h-[26px]" bgColor="bg-[#3652E1]" fontSize="text-[8px]"
        color="text-[#EFEFEF]" v-if="!small && !trending" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import { onMounted, onUpdated, ref } from "vue";

export default {
  name: "Card",
  components: {
    Button
  },
  props: ["small", "trending"],
  setup({ small, trending }) {
    const TOPICS = [
      { name: 'Environment', bgColor: 'bg-[#00B33D]' },
      { name: 'Asia', bgColor: 'bg-[#1C1C1C]' }
    ]

    let sizes = ref({
      imgWidth: '122',
      imgHeight: '111',
      containerWidth: 'w-[518px]',
      containerHeight: 'h-[134px]',
      titleWidth: 'w-[223px]',
    })

    let padding = ref({
      container: 'p-[11px]'
    })

    onMounted(() => {
      if (small) {
        sizes.value.imgWidth = '53'
        sizes.value.imgHeight = '62'
        sizes.value.containerWidth = 'w-[220px]'
        sizes.value.containerHeight = 'h-[77px]'
        sizes.value.titleWidth = 'w-[142px]'

        padding.value.container = 'p-[8px]'
        return
      }
      if (trending) {
        sizes.value.imgWidth = '47'
        sizes.value.imgHeight = '47'
        sizes.value.containerWidth = 'w-[290px]'
        sizes.value.containerHeight = 'h-[47px]'

        padding.value.container = 'p-0'
        return
      }
    })

    return { sizes, padding, TOPICS }
  },
}
</script>