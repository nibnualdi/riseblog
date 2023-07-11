<template>
  <div id="toast-success"
    class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-[#EFEFEF] rounded-lg shadow absolute transition-all duration-300"
    :class="isOpen ? 'opacity-100 -translate-x-1/2 -translate-y-1/2' : 'opacity-0 -translate-x-1/2 '"
    style="top: 85%; left: 50%;" role="alert">

    <!-- success -->
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg text-green-400"
      v-if="status === 'success'">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      <span class="sr-only">Check icon</span>
    </div>

    <!-- failed -->
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-[#EFEFEF] rounded-lg "
      v-if="status === 'failed'">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
      <span class="sr-only">Error icon</span>
    </div>

    <div class="ml-3 text-sm font-normal">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: ["isOpen", "text", "status"]
}
</script>