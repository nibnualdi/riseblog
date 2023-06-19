<template>
  <section class="flex justify-center items-center h-[813px]">
    <div class="w-[977px] h-[519px] bg-[#FFFFFF] rounded-[40px] flex items-center gap-[29px] overflow-hidden">
      <div class="relative w-[400px] h-full">
        <Oval bgGradient="true" widthAndHeight="w-[42.94px] h-[160.14px]" position="top-[-59px] left-[150px]"
          rotate="rotate-[-64.07deg]" />
        <Oval bgGradient="true" widthAndHeight="w-[38px] h-[93px]" position="top-[383px] left-[124px]"
          rotate="rotate-[-76.97deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[142.24px] h-[84.33px]" position="top-[61.52px] left-[15.6px]"
          borderWidth="p-[10px]" rotate="rotate-[19.42deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[185.73px] h-[80.37px]" position="top-[50px] left-[198px]"
          borderWidth="p-[30px]" rotate="rotate-[138.66deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[250.74px] h-[80.37px]" position="top-[272px] left-[155px]"
          borderWidth="p-[30px]" rotate="rotate-[-142.48deg]" />
        <Circle widthAndHeight="w-[93px] h-[93px]" position="top-[172px] left-[-30px]" />
        <Circle borderGradient="true" widthAndHeight="w-[174.05px] h-[160.82px]" position="top-[390px] left-[-76px]"
          borderWidth="p-[35px]" />
      </div>
      <div class="w-full p-[200px] flex flex-col gap-[10px]">
        <h1 class="text-[48px] font-bold text-[#2B2C34]">{{ name }}</h1>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username" />
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="******************">
      </div>
    </div>
  </section>
</template>

<script>
import Oval from "@/components/Ovals/Oval.vue"
import Circle from "@/components/Circles/Circle.vue"

export default {
  name: "AuthCard",
  props: ["name"],
  components: {
    Oval,
    Circle
  }
}
</script>