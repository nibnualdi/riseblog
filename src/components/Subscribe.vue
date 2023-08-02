<template>
  <section class="flex justify-center items-center h-[813px] scale-75 md:scale-100">
    <div class="relative w-[977px] h-[519px] bg-[#FFFFFF] rounded-[40px] flex items-center gap-[29px] overflow-hidden">
      <div class="absolute w-[400px] h-full translate-x-20 md:translate-x-0">
        <Oval bgGradient="true" widthAndHeight="w-[42.94px] h-[160.14px] scale-75 md:scale-100" position="top-[-59px] left-[150px]" rotate="rotate-[-64.07deg]" />
        <Oval bgGradient="true" widthAndHeight="w-[38px] h-[93px] scale-75 md:scale-100" position="top-[383px] left-[124px]" rotate="rotate-[-76.97deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[142.24px] h-[84.33px] scale-75 md:scale-100" position="top-[61.52px] left-[15.6px]" borderWidth="p-[10px]" rotate="rotate-[19.42deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[185.73px] h-[80.37px] scale-75 md:scale-100" position="top-[50px] left-[198px]" borderWidth="p-[30px]" rotate="rotate-[138.66deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[250.74px] h-[80.37px] scale-75 md:scale-100" position="top-[272px] left-[155px]" borderWidth="p-[30px]" rotate="rotate-[-142.48deg]" />
        <Circle widthAndHeight="w-[93px] h-[93px] scale-75 md:scale-100" position="top-[172px] left-[-30px]" />
        <Circle borderGradient="true" widthAndHeight="w-[174.05px] h-[160.82px] scale-75 md:scale-100" position="top-[390px] left-[-76px]" borderWidth="p-[35px]" />
      </div>
      <div class="absolute right-6">
        <h1 class="text-[48px] font-bold text-[#2B2C34]">Subscribe</h1>
        <p class="text-[20px] text-[#2B2C34] w-52 md:w-[485px] leading-[24.2px]">Subscribe to our newsletter and get upto 40% off on our exclusive service.</p>
        <div class="w-80 md:w-[495px] h-[55px] bg-gradient-to-b from-[#3652E1] to-[#8057F5] rounded-[12.78px] p-1 flex justify-between items-center pr-[30px] mt-[56px]">
          <input type="text" placeholder="Email Address" class="rounded-s-[12.78px] w-48 md:w-[360.7px] h-full py-[21] pl-[25px] outline-none placeholder-[#2B2C34]">
          <button class="text-[14.06px] font-bold text-[#FFFFFF]">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Oval from "@/components/Ovals/Oval.vue"
import Circle from "@/components/Circles/Circle.vue"

export default {
  name: "Subscribe",
  components: {
    Oval,
    Circle
  }
}
</script>