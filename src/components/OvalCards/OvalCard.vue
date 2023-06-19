<template>
  <div class="w-[209px] h-[344px] min-w-[209px] min-h-[344px] rounded-[200px] relative">
    <img :src="require(`@/assets/home/${image}`)" alt="tech" class="absolute top-0">
    <h1 class="text-[21px] text-[#FFFFFF] text-center leading-[25.41px] absolute top-[287.91px] left-[40px] w-[129px]">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "OvalCard",
  props: ['name', 'image']
}
</script>