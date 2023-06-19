<template>
  <!-- white border color -->
  <div 
  v-if="!borderColorGradient"
  class="rounded-[81px] border-[#EFEFEF] border-[13px] absolute"
  :class="`${widthAndHeight ? widthAndHeight : 'w-[38px] h-[93px]'} ${rotate} ${position}`"></div>

  <!-- gradient border color -->
  <div 
  v-if="borderColorGradient"
  class="rounded-[81px] border-none bg-gradient-to-r from-[#3652E1] to-[#8057F5] border-[13px] absolute"
  :class="`${widthAndHeight ? widthAndHeight : 'w-[38px] h-[93px]'} ${rotate} ${position} ${borderWidth ? borderWidth : 'p-3'}`">
    <div class="w-full h-full rounded-[81px]" :class="`${fillColor ? fillColor : 'bg-white'}`"></div>
  </div>

  <!-- gradient bg color -->
  <div 
  v-if="bgGradient"
  class="rounded-[81px] border-none bg-gradient-to-r from-[#3652E1] to-[#8057F5] border-[13px] absolute"
  :class="`${widthAndHeight ? widthAndHeight : 'w-[38px] h-[93px]'} ${rotate} ${position}`">
  </div>
</template>

<script>
export default {
  name: "Ovals",
  props: ["widthAndHeight", "rotate", "position", "bgGradient", "borderColorGradient", "borderWidth", "fillColor"]
}
</script>