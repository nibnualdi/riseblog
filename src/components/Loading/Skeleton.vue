<template>
  <div v-if="!trending && !small" class="border border-slate-700 shadow w-[190px] min-w-[190px] rounded-[20px]">
    <div class="animate-pulse">
      <div class="bg-slate-700 w-[190px] h-[189px] object-cover rounded-t-[20px]"></div>
      <div class="p-[7px] flex flex-col gap-2">
        <div class="h-2 bg-slate-700 rounded mb-2"></div>
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>

  <div v-if="trending || small" class="border border-slate-200 shadow">
    <div :class="trending ? 'w-[290px] min-w-[290px]' : 'w-[220px] min-w-[220px] p-1'">
      <div class="animate-pulse flex gap-3">
        <div class="bg-slate-700 w-[46px] h-[46px]"></div>
        <div class="w-[70%] flex flex-col gap-1 mt-1">
          <div class="w-full h-2 bg-slate-700 rounded mb-1"></div>
          <div class="w-full h-2 bg-slate-700 rounded"></div>
          <div class="w-full h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Skeleton",
  props: ["trending", "small"]
}
</script>