<template>
  <section class="flex justify-center items-center h-[813px]">
    <div class="w-[977px] h-[519px] bg-[#FFFFFF] rounded-[40px] flex items-center gap-[29px] overflow-hidden">
      <div class="relative w-[400px] h-full">
        <Oval bgGradient="true" widthAndHeight="w-[42.94px] h-[160.14px]" position="top-[-59px] left-[150px]"
          rotate="rotate-[-64.07deg]" />
        <Oval bgGradient="true" widthAndHeight="w-[38px] h-[93px]" position="top-[383px] left-[124px]"
          rotate="rotate-[-76.97deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[142.24px] h-[84.33px]" position="top-[61.52px] left-[15.6px]"
          borderWidth="p-[10px]" rotate="rotate-[19.42deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[185.73px] h-[80.37px]" position="top-[50px] left-[198px]"
          borderWidth="p-[30px]" rotate="rotate-[138.66deg]" />
        <Oval borderColorGradient="true" widthAndHeight="w-[250.74px] h-[80.37px]" position="top-[272px] left-[155px]"
          borderWidth="p-[30px]" rotate="rotate-[-142.48deg]" />
        <Circle widthAndHeight="w-[93px] h-[93px]" position="top-[172px] left-[-30px]" />
        <Circle borderGradient="true" widthAndHeight="w-[174.05px] h-[160.82px]" position="top-[390px] left-[-76px]"
          borderWidth="p-[35px]" />
      </div>
      <div class="w-full p-[200px] flex flex-col">
        <h1 class="text-[48px] font-bold text-[#2B2C34]">{{ name }}</h1>
        <!-- signup inputs -->
        <input v-if="name === 'Sign Up'" v-model="user.firstName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstname" type="text" placeholder="firstname" />
        <p class="text-xs text-red-500 ml-1 mb-[15px] transition-all duration-300"
          :class="errMessageValidation.firstName ? 'opacity-100 translate-y-1/2' : 'opacity-0 leading-[0px]'">
          {{ errMessageValidation.firstName }}</p>
        <input v-if="name === 'Sign Up'" v-model="user.lastName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastname" type="text" placeholder="lastname" />
        <p class="text-xs text-red-500 ml-1 mb-[15px] transition-all duration-300"
          :class="errMessageValidation.lastName ? 'opacity-100 translate-y-1/2' : 'opacity-0 leading-[0px]'">
          {{ errMessageValidation.lastName }}</p>
        <input v-if="name === 'Sign Up'" v-model="user.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="text" placeholder="email" />
        <p class="text-xs text-red-500 ml-1 mb-[15px] transition-all duration-300"
          :class="errMessageValidation.email ? 'opacity-100 translate-y-1/2' : 'opacity-0 leading-[0px]'">
          {{ errMessageValidation.email }}</p>
        <!-- signup inputs -->

        <!-- login inputs -->
        <input v-if="name === 'Login'" v-model="idUser"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="id" type="text" placeholder="id" />
        <!-- login inputs -->
        <button
          class="bg-[#3652E1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button" @click="handleButton">
          <Spinner v-if="isLoadingSignup" />
          <p v-if="!isLoadingSignup">{{ name }}</p>
        </button>
        <p class="text-center" v-if="name === 'Sign Up'">already have an account? <span
            class="hover:cursor-pointer text-blue-700" @click="handleButtonToAnotherAuth('Sign Up')">login</span></p>
        <p class="text-center" v-if="name === 'Login'">have no an account yet? <span
            class="hover:cursor-pointer text-blue-700" @click="handleButtonToAnotherAuth('Login')">sign up</span></p>
      </div>
    </div>
  </section>
</template>

<script>
import Oval from "@/components/Ovals/Oval.vue"
import Circle from "@/components/Circles/Circle.vue"
import { useRouter } from "vue-router"
import { ref, computed } from "vue";
import { axiosInstance } from "@/axios";
import Cookies from "js-cookie";
import { useStore } from "vuex";
import Spinner from "./Loading/Spinner.vue";

export default {
  name: "AuthCard",
  props: ["name"],
  components: {
    Oval,
    Circle,
    Spinner
  },
  setup({ name }) {
    const router = useRouter();
    const store = useStore()
    const user = ref({
      firstName: "",
      lastName: "",
      email: "",
    });
    const idUser = ref("")
    const isLoadingSignup = computed(() => store.state.signup.isLoading)
    let errMessageValidation = ref({
      firstName: "",
      lastName: "",
      email: "",
    })

    const handleButton = async () => {
      if (name === "Sign Up") {

        Object.keys(errMessageValidation.value).map((e) => {
          if (!user.value[e]) {
            errMessageValidation.value[e] = `${e} is required`
            return
          }
          if (user.value[e]) {
            errMessageValidation.value[e] = ""
            return
          }
          return
        })

        store.commit("updateIsLoadingSignup", true)
        try {
          const userReq = await axiosInstance.post(`/user/create`, user.value)
          Cookies.set('user', userReq.data.id, { expires: 7 })
          store.commit("updateIsModalSignupOpen", true)
          store.commit("updateIsLoadingSignup", false)
        } catch (err) {
          console.log(Object.values(err.response.data.data).join(", "))
          store.commit("updateErrMessageSignup", Object.values(err.response.data.data).join(", "))
          store.commit("updateIsLoadingSignup", false)
          store.commit("updateIsFailedSignup", true)
          setTimeout(() => {
            store.commit("updateIsFailedSignup", false)
            store.commit("updateErrMessageSignup", "")
          }, 3000)
        }
        return
      }

      const userReq = await axiosInstance.get(`/user?created=1`)
      const selectedUser = userReq.data.data.filter((user) => {
        return user.id === idUser.value
      })
      console.log("idUser : ", selectedUser)
    }

    const handleButtonToAnotherAuth = (name) => {
      name === "Sign Up" ? router.push("/auth/login") : router.push("/auth/signup")
    }

    return { handleButtonToAnotherAuth, user, idUser, handleButton, isLoadingSignup, errMessageValidation }
  }
}
</script>