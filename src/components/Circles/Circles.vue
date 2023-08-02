<template>
  <div class="absolute max-w-[1460px] w-[80%]">
    <Circle widthAndHeight="w-[157px] h-[157px] scale-50 lg:scale-100" position="top-[136px] left-[56px] -translate-x-24 lg:translate-x-0" />
    <Circle widthAndHeight="w-[101px] h-[101px] scale-50 lg:scale-100" position="top-[321px] left-[209px] -translate-x-32 lg:translate-x-0" rotate="rotate-[-90deg]" />
    <Circle widthAndHeight="w-[90px] h-[90px] scale-50 lg:scale-100" position="top-[602px] left-[146px] -translate-x-32 lg:translate-x-0" />
    <Circle widthAndHeight="w-[101px] h-[101px] scale-50 lg:scale-100" position="top-[112px] right-[30px] translate-x-12 lg:translate-x-0" rotate="rotate-[-90deg]" />
    <Circle widthAndHeight="w-[147px] h-[147px] scale-50 lg:scale-100" position="top-[567px] right-[20px] translate-x-12 lg:translate-x-0" />
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