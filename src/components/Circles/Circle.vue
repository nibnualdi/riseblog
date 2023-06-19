<template>
  <div 
    v-if="!borderGradient"
    :class="`${widthAndHeight} ${position} ${rotate}`"
    class="absolute rounded-[80px] bg-gradient-to-r from-[#3652E1] to-[#8057F5]">
  </div>

  <div 
    v-if="borderGradient"
    :class="`${widthAndHeight} ${position} ${rotate} ${borderWidth ? borderWidth : 'p-1'}`"
    class="absolute rounded-[80px] bg-gradient-to-r from-[#3652E1] to-[#8057F5]">
    <div class="w-full h-full bg-white rounded-[80px]"></div>
  </div>
</template>

<script>
export default {
  name: "Circle",
  props: ["widthAndHeight", "position", "rotate", "borderGradient", "borderWidth"],
}
</script>