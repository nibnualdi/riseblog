<template>
  <div class="absolute max-w-[1460px] w-[80%]">
    <Circle widthAndHeight="w-[157px] h-[157px]" position="top-[136px] left-[56px]" />
    <Circle widthAndHeight="w-[101px] h-[101px]" position="top-[321px] left-[209px]" rotate="rotate-[-90deg]" />
    <Circle widthAndHeight="w-[90px] h-[90px]" position="top-[602px] left-[146px]" />
    <Circle widthAndHeight="w-[101px] h-[101px]" position="top-[112px] right-[30px]" rotate="rotate-[-90deg]" />
    <Circle widthAndHeight="w-[147px] h-[147px]" position="top-[567px] right-[20px]" />
  </div>
</template>

<script>
import Circle from "@/components/Circles/Circle.vue"

export default {
  name: "Circles",
  components: {
    Circle
  }
}
</script>