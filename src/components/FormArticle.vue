<template>
  <section class="pt-[135px] px-2 lg:px-[146px] min-h-full flex flex-col gap-5">
    <!-- <div class="mb-6">
      <input type="text" id="base-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Title..." v-model="title">
    </div> -->

    <div
      class="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 hover:cursor-pointer">
      <div v-if="loadingImage"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 opacity-50 flex flex-col gap-4 items-center justify-center w-full h-full">
        <Spinner />
        <!-- <p>Loading the image...</p> -->
      </div>
      <label for="upload-photo" v-if="imageData.url"
        class="change-image flex flex-col justify-center items-center gap-4 hover:cursor-pointer">
        <img :src="imageData.url" alt="image">
        <div class="flex items-center">
          Click to change image
          <div class="w-7 m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
        </div>
      </label>

      <label for="upload-photo" v-if="!imageData.url && !loadingImage"
        class="add-image flex flex-col justify-center items-center gap-4 hover:cursor-pointer">
        Click to add an image
        <div class="w-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </label>

      <input type="file" name="photo" id="upload-photo" class="opacity-0" @input="handleUploadImage" />
    </div>

    <div>
      <textarea id="message" rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="What's the article about..." v-model="desc"></textarea>
    </div>

    <div class="flex flex-wrap gap-[3px] w-full ml-2">
      <span
        class="flex items-center justify-between gap-1 bg-purple-500 text-purple-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded hover:cursor-pointer"
        @click="handleRemoveTag(tag)" v-for="tag in selectedTags">
        {{ tag }}
        <div class="w-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </span>
    </div>

    <div class="mb-4">
      <input type="text" id="base-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Add a tag..." v-model="inputTags" @input="handleSearchTags($event)" @keydown="handleInputTagsEnter">
      <label for="base-input" class="block mb-2 text-sm font-medium text-gray-400 ml-2">Enter to make a new tag...</label>
    </div>

    <div class="flex flex-wrap gap-[3px] w-full ml-2">
      <span
        class="bg-purple-50 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-purple-400 hover:cursor-pointer"
        v-for="tag in limitedTags" @click="handlePickTagButton">{{ tag }}</span>
    </div>

    <div class="flex flex-wrap justify-end gap-[3px] w-full ml-2 mt-4">
      <button type="button"
        class="bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        @click="handleCancelButton">Cancel</button>
      <button type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="handleUploadButton">
        <Spinner v-if="loadingUpload" />
        <p v-if="!loadingUpload">Upload</p>
      </button>
    </div>
  </section>
</template>

<script>
import { axiosInstance } from '@/axios';
import { onMounted, ref, watch } from 'vue';
import { uploadFileFirebase, deleteFileFireBase } from '@/utils/firebase/index'

import Spinner from './Loading/Spinner.vue';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  components: {
    Spinner,
  },
  setup() {
    const title = ref("")
    const desc = ref("")
    const imageData = ref({
      url: "",
      ref: ""
    })
    const selectedTags = ref([])
    const inputTags = ref("")
    const tagsRef = ref([])
    const limitedTags = ref([])
    const loadingImage = ref(false)
    const loadingUpload = ref(false)

    const router = useRouter()
    const store = useStore()

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

    const handleInputTagsEnter = (e) => {
      const key = e.key

      if (key.toLowerCase() !== "enter") return
      if (inputTags.value === "") return

      selectedTags.value.push(inputTags.value)
      inputTags.value = ""
    }

    const handlePickTagButton = (e) => {
      selectedTags.value.push(e.target.innerText)
      inputTags.value = ""
    }

    const handleRemoveTag = (value) => {
      const newTags = selectedTags.value.filter((tag) => {
        return tag !== value
      })

      selectedTags.value = newTags
    }

    const handleUploadImage = async (e) => {
      const length = e.target.files.length
      if (!length) return

      loadingImage.value = true

      const action = e.target.labels[0].classList[0]
      const image = e.target.files[0]

      if (action === "add-image") {
        const { downloadURL, ref } = await uploadFileFirebase(image)
        loadingImage.value = false
        return imageData.value = { url: downloadURL, ref }
      }
      if (action === "change-image") {
        deleteFileFireBase(imageData.value.ref)

        const { downloadURL, ref } = await uploadFileFirebase(image)
        loadingImage.value = false
        return imageData.value = { url: downloadURL, ref }
      }
    }

    const handleUploadButton = async () => {
      if (!desc.value || !imageData.value.url || !selectedTags.value.length) return alert("please fill all the input")

      loadingUpload.value = true

      try {
        await axiosInstance.post("/post/create", {
          text: desc.value,
          image: imageData.value.url,
          tags: selectedTags.value,
          owner: Cookies.get("idUser")
        })

        loadingUpload.value = false
        store.commit("updatePostArticleSuccess", "article is posted")
        router.push("/my-articles")
      } catch (err) {
        loadingUpload.value = false
        store.commit("updatePostArticleError", "article is not posted, there's somthing wrong")
        console.log(err)
      }
    }

    const handleCancelButton = () => {
      if (imageData.value.ref) {
        deleteFileFireBase(imageData.value.ref)
        router.push("/my-articles")
        return
      }

      router.push("/my-articles")
    }

    return { inputTags, selectedTags, tagsRef, limitedTags, handleSearchTags, handlePickTagButton, handleRemoveTag, title, desc, imageData, handleUploadImage, loadingImage, handleInputTagsEnter, handleUploadButton, loadingUpload, handleCancelButton }
  }
}
</script>