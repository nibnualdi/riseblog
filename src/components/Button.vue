<template>
  <button
    :class="`${bgColor} ${color} ${widthAndHeight} ${fontSize} ${fontWeight} ${border ? 'border-solid border border-[#D9D9D9]' : ''}`"
    class="rounded-[80px] flex justify-center items-center">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ['bgColor', 'color', 'widthAndHeight', 'fontSize', 'fontWeight', 'border', 'text']
}
</script>