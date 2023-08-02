<template>
  <div class="flex gap-[22px] items-center max-w-[630px] w-[350px] scale-90 lg:scale-100 lg:w-full overflow-auto oval-cards">
    <OvalCard name="Technology" image="tech.png" />
    <OvalCard name="Environment" image="env.png" />
    <OvalCard name="Business" image="buss.png" />
    <OvalCard name="Health" image="heal.png" />
  </div>
</template>

<script>
import OvalCard from "@/components/OvalCards/OvalCard.vue"

export default {
  name: "OvalCards",
  components: {
    OvalCard
  }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.oval-cards::-webkit-scrollbar {
  display: none;
}

.oval-cards {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>