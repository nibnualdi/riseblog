<template>
  <header
    class="flex justify-between px-[146px] pt-[24px] pb-[17px] text-[13px] font-medium bg-[#EFEFEF] bg-opacity-[80%] w-[100%] fixed z-10">
    <div>
      <img src="@/assets/logo.png" alt="logo">
    </div>
    <nav class="flex gap-[28px]">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Articles' }">Articles</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <img :src="searchIcon" alt="search">
    </nav>
  </header>
</template>

<script>
import searchIcon from "@/assets/icons/search.svg"

export default {
  name: "Header",
  setup() {
    return { searchIcon }
  }
}
</script>

<style scoped>
nav a {
  color: #1C1C1C;
}

nav a.router-link-exact-active {
  color: #3652E1;
}
</style>