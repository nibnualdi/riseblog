<template>
  <div id="popup-modal" tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    v-if="isModalSignupOpen">
    <div class="relative w-full h-full">
      <div class="absolute transition-all w-[448px] h-[350px] bg-[#EFEFEF] rounded-lg shadow" :style="position">
        <!-- <button type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
          data-modal-hide="popup-modal">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button> -->
        <div class="p-6 text-center">
          <svg aria-hidden="true" class="mx-auto mb-4 text-red-400 w-14 h-14" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-lg font-normal text-gray-400">Please keep the id for the login :</h3>
          <h3 class="mb-5 text-lg text-gray-400 font-bold">{{ token }}</h3>
          <h3 class="mb-5 text-lg font-normal text-gray-400 leading-5">I'm so sorry for the inconvenience, because it uses
            dummy api for the whole data, and the only unieq data that can be used for login is the id </h3>
          <button data-modal-hide="popup-modal" type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            @mouseenter="handleMove" @click="handleUnforgivableButton">
            Nahh, It's unforgivable
          </button>
          <button data-modal-hide="popup-modal" type="button"
            class="rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
            @click="handleClose">Yeah,
            It's fine</button>
        </div>
      </div>
    </div>
  </div>


  <div class="absolute transition-all w-[448px] bg-[#EFEFEF] rounded-lg shadow"
    style="top: 50%; left: 50%; transform: translate(-50%, -50%);" v-if="isUnforgivableButton">
    <div class="p-6 text-center">
      <svg aria-hidden="true" class="mx-auto mb-4 text-red-400 w-14 h-14" fill="none" stroke="currentColor"
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <button data-modal-hide="popup-modal" type="button"
        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-black rounded-lg text-2xl inline-flex items-center px-5 py-2.5 text-center mr-2"
        @click="handleClose">
        IT'S REALLY FINE
      </button>
    </div>
  </div>

  <Toast :text="errMessageSignup" status="failed" :isOpen="isSignupFailed" />
</template>

<script>
import { computed, ref } from 'vue';
import Cookies from "js-cookie";
import { useStore } from 'vuex';
import Toast from './Toast.vue';
import { useRouter } from 'vue-router';

export default {
  name: "Modal",
  components: {
    Toast
  },
  setup() {
    const store = useStore()
    const isModalSignupOpen = computed(() => store.state.signup.isModalSignupOpen)
    const isSignupFailed = computed(() => store.state.signup.isFailed)
    const errMessageSignup = computed(() => store.state.signup.errMessage)

    let position = ref("top: 50%; left: 50%; transform: translate(-50%, -50%);")
    let isUnforgivableButton = ref(false)
    const token = ref(Cookies.get('user'))
    let key1 = ref(0)
    let key2 = ref(0)
    let isCopied = ref(false)

    const router = useRouter();

    const randomNumber = (min, max) => {
      return Math.random() * (max - min) + min;
    }

    const handleClose = () => {
      // Copy the text inside the text field
      navigator.clipboard.writeText(token.value);
      router.push("/auth/login")

      isCopied.value = true
      store.commit("updateIsTokenCopiedSignup", true)
      setTimeout(() => {
        isCopied.value = false
        store.commit("updateIsTokenCopiedSignup", false)
      }, 3500)

      store.commit("updateIsModalSignupOpen", false)
    }

    const handleMove = (e) => {
      const randomNumberFrom0To2 = Math.floor(randomNumber(0, 5))
      const randomNumberFrom0To2Duplicate = Math.floor(randomNumber(0, 5))
      const rndIntTop = [20, 45, 30, 50, 65, 10]
      const rndIntLeft = [50, 65, 45, 30, 20, 15]

      position.value = `top: ${rndIntTop[key1.value]}%; left: ${rndIntLeft[key2.value]}%;`

      key1.value++
      key2.value++

      if (key1.value === 6) {
        key1.value = 0
      }
      if (key2.value === 6) {
        key2.value = 0
      }
    }

    const handleUnforgivableButton = () => {
      isUnforgivableButton.value = !isUnforgivableButton.value

      store.commit("updateIsModalSignupOpen", false)
    }

    return { handleClose, handleMove, position, handleUnforgivableButton, isUnforgivableButton, isCopied, token, isModalSignupOpen, isSignupFailed, errMessageSignup }
  }
}
</script>