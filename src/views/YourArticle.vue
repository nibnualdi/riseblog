<template>
  <section class="pt-[135px] px-[146px] min-h-full flex flex-col gap-5">
    <div
      class="flex items-center bg-transparent border border-gray-200 rounded-lg shadow w-full hover:bg-[#3652E1] group cursor-pointer transition-all"
      v-for="CONSTAN in CONSTANS">
      <img class="object-cover w-40 rounded-none rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg"
        alt="">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gray-100">Noteworthy technology acquisitions
          2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions
          of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          numquam cumque? Impedit, praesentium itaque nemo quibusdam odio necessitatibus perspiciatis eos velit, quidem
          tenetur nulla dolorum iusto ut vitae, sit laudantium blanditiis veritatis placeat minima.</p>
        <div>
          <span
            class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
        </div>
      </div>
      <div class="flex gap-1 mr-10">
        <div class="w-[50px] rounded-md bg-blue-600  hover:bg-blue-800 text-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </div>
        <div class="w-[50px] rounded-md bg-red-800 hover:bg-gray-700 text-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Card from '@/components/Card.vue';

export default {
  name: "YourArticle",
  components: {
    // Card
  },
  setup() {
    const CONSTANS = [1,2,3,4,5]

    return { CONSTANS }
  }
}
</script>