<template>
  <section class="pt-[135px]">
    <div class="flex items-center justify-between">
      <div>
        <h1
          class="bg-clip-text text-transparent bg-gradient-to-r from-[#3652E1] to-[#8057F5] text-[46px] font-bold mb-[5px]">
          For you</h1>
        <div class="relative mb-[17px]">
          <input type="text" name="search" placeholder="Search article..."
            class="w-[220px] h-[32px] bg-[#E8E8E8] outline-[#8E8E8E] rounded-[20px] pl-[31px] text-[12px] text-[#8E8E8E]">
          <img src="@/assets/icons/search.svg" alt="search" width="11" height="11"
            class="absolute top-[11px] left-[10px]">
        </div>
      </div>
      <Button widthAndHeight="w-[194px] h-[50.51px]" bgColor="bg-[#3652E1]" color="text-[#EFEFEF]" fontSize="text-[12px]"
        text="Create Account" fontWeight="font-semibold" class="block lg:hidden" @click="handleButtonLinkToSignUp" />
    </div>
    <div class="flex items-center gap-[50px] mb-[17px] capitalize">
      <router-link v-for="tag in tags" :to="`/articles/category/${tag}`">{{ tag }}</router-link>
    </div>
    <ArticleLeftCards />
  </section>
</template>

<script>
import ArticleLeftCards from "@/components/ArticleLeftCards.vue"
import Button from "@/components/Button.vue"
import { computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "LeftCardSection",
  components: {
    ArticleLeftCards,
    Button
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    
    onMounted(()=>{
      store.dispatch("getPostByTag", route.params.category)
    })

    watch([route], ()=>{
      store.dispatch("getPostByTag", route.params.category)
      console.log(route.params.category)
    })

    const tags = computed(()=> store.state.tag)

    const handleButtonLinkToSignUp = () => {
      router.push('/auth/signup')
    }

    return { handleButtonLinkToSignUp, tags }
  }
}
</script>

<style scoped>
div a {
  font-size: 13px;
  color: #8E8E8E;
}

div a.router-link-exact-active {
  font-weight: 600;
  font-size: 18px;
  color: #3652E1;
}
</style>