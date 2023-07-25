<template>
  <section class="pt-[135px] px-[146px] min-h-full flex flex-col gap-5">
    <div class="mb-6">
      <input type="text" id="base-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Title..."
        v-model="title">
    </div>

    <div>
      <label for="upload-photo"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex flex-col justify-center items-center gap-4 w-full p-2.5 hover:cursor-pointer">
        Click to add an image
        <div class="w-7 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </label>
      <input type="file" name="photo" id="upload-photo" class="opacity-0" />
    </div>

    <div>
      <textarea id="message" rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="What's the article about..."
        v-model="desc"></textarea>
    </div>

    <div class="w-full ml-2">
      <span class="bg-purple-500 text-purple-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Purple</span>
    </div>

    <div class="mb-6">
      <input type="text" id="base-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Add a tag..." @input="handleSearchTags($event)">
      <label for="base-input" class="block mb-2 text-sm font-medium text-gray-400 ml-2">Enter to make a new tag...</label>
    </div>

    <div class="w-full ml-2">
      <span
        class="bg-purple-50 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-purple-400 hover:cursor-pointer"
        v-for="tag in limitedTags">{{ tag }}</span>
    </div>
  </section>
</template>

<script>
import { axiosInstance } from '@/axios';
import { onMounted, ref, watch } from 'vue';

export default {
  setup() {
    const title = ref("")
    const desc = ref("")
    const imageUrl = ref("")
    const tagsRef = ref([])
    const limitedTags = ref([])

    onMounted(async () => {
      const tags = await axiosInstance.get("/tag")
      const filteredTags = tags.data.data.filter((tag) => {
        if (tag === null) return

        return tag.replace(/\s/g, '').length
      })

      tagsRef.value = filteredTags

      filteredTags.forEach((element, index) => {
        if (index > 10) return
        return limitedTags.value.push(element)
      });
    })

    const handleSearchTags = (event) => {
      limitedTags.value = []

      const input = event.target.value
      const filteredTags = tagsRef.value.filter((tag) => {
        return tag.includes(input)
      })

      filteredTags.forEach((element, index) => {
        if (index > 10) return
        return limitedTags.value.push(element)
      });
    }


    return { tagsRef, limitedTags, handleSearchTags, title, desc, imageUrl }
  }
}
</script>