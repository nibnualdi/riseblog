<template>
  <div class="absolute z-[-10] max-w-[1680px] w-[80%]">
    <Circle widthAndHeight="w-[64px] h-[200.1px]" position="top-[153.56px] left-[35.12px]" rotate="rotate-[46.58deg]" />
    <Circle widthAndHeight="w-[145.31px] h-[27px]" position="top-[331.41px] left-[117.97px]" rotate="rotate-[-118.7deg]" />
    <Circle widthAndHeight="w-[90px] h-[156px]" position="top-[590.18px] left-[110px]" rotate="rotate-[34.11deg]" />
    <Circle widthAndHeight="w-[140.6px] h-[28.06px]" position="top-[123px] right-[751px]" rotate="rotate-[31.17deg]" />
    <Circle widthAndHeight="w-[140.6px] h-[57.55px]" position="top-[107px] right-[442px]" rotate="rotate-[-19.59deg]" />
    <Circle widthAndHeight="w-[244.96px] h-[91.05px]" position="top-[641.05px] right-[201.87px]" rotate="rotate-[13.67deg]" />
  </div>
</template>

<script>
import Circle from "@/components/Circles/Circle.vue"

export default {
  name: "Ovals",
  components: {
    Circle
  }
}
</script>