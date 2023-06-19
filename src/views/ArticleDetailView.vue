<template>
  <section class="p-[146px] flex justify-center gap-[75px]">
    <div class="hidden lg:block">
      <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5] text-[33px] font-bold mb-[5px]">For you</h1>
      <div class="relative mb-[17px]">
        <input type="text" name="search" placeholder="Search article..." class="w-[220px] h-[32px] bg-[#E8E8E8] outline-[#8E8E8E] rounded-[20px] pl-[31px] text-[12px] text-[#8E8E8E]">
        <img src="@/assets/icons/search.svg" alt="search" width="11" height="11" class="absolute top-[11px] left-[10px]">
      </div>

      <div class="flex flex-col gap-[9px]">
        <Card small="true"/>
        <Card small="true"/>
        <Card small="true"/>
      </div>
    </div>

    <div class="flex flex-col items-center max-w-[802px]">
      <h1 class="text-[33px] text-[#1C1C1C] font-bold leading-[39.94px] mb-[36px]">Elon Musk shows off updates to his brain chips and says he’s going to install one in himself when they are ready</h1>
      <div>
        <img src="@/assets/cards/neuralink.jpg" alt="article">
        <p class="text-[15px] text-[#8E8E8E] leading-[18.15px]">Neuralink logo displayed on a phone screen, a silhouette of a paper in shape of a human face and a binary code displayed on a screen are seen in this multiple exposure illustration photo taken in Krakow, Poland on December 10, 2021.</p>
      </div>
      <p class="max-w-[668px] text-justify mt-[57px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis cupiditate pariatur voluptatibus voluptatem laudantium voluptates itaque sint ea eaque placeat at, inventore eius eveniet? Dolorum atque perspiciatis ducimus commodi? Fuga, enim nemo id necessitatibus beatae debitis itaque voluptatibus fugit nam ex adipisci neque minus assumenda dignissimos! Possimus nulla totam inventore praesentium. Quam ea repudiandae quo nam accusamus, nostrum vitae maxime natus suscipit cumque veniam dolorum. Nihil maxime quo aliquam non iusto ullam! Numquam tenetur eos aperiam, deserunt obcaecati quos veritatis iure tempore corrupti harum eveniet, labore dolorem. Ut, recusandae quam. Quis magnam ratione quia ab? Tempora nesciunt fuga dolores consequuntur.</p>
    </div>
  </section>
  <Ovals2 />
</template>

<script>
import Card from "@/components/Card.vue"
import Ovals2 from "@/components/Ovals/Ovals2.vue"

export default {
  name: "ArticleLeftCards",
  components: {
    Card,
    Ovals2
  }
}
</script>