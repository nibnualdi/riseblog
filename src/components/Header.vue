<template>
  <header
    class="flex justify-between items-center px-[146px] pt-[24px] pb-[17px] text-[13px] font-medium bg-[#EFEFEF] bg-opacity-[80%] w-[100%] fixed z-10"
    :ref_key="keyTrigger">
    <div>
      <img src="@/assets/logo.png" alt="logo">
    </div>
    <div class="flex gap-[30px]">
      <nav class="flex gap-[28px] items-center">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="`/articles/category/${selectedTag}`">Articles</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <!-- <img :src="searchIcon" alt="search"> -->
      </nav>
      <div class="profile relative">
        <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"
          class="w-10 h-10 rounded-full cursor-pointer" :src="user.picture && user.picture" alt="User dropdown"
          v-if="user.picture" @click="handleDropdown">

        <div
          class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
          v-if="user.firstName && !user.picture" @click="handleDropdown">
          <span class="font-medium text-gray-600 dark:text-gray-300">{{ `${user.firstName[0]}${user.lastName[0]}`
          }}</span>
        </div>

        <div class="hover:cursor-pointer p-2 rounded-lg bg-[#3652E1] text-slate-200"
          v-if="!user.firstName && !route.path.includes('auth')" @click="handleToLogin('signup')">Login</div>

        <!-- Dropdown menu -->
        <div id="userDropdown"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute transition-all ease-in-out duration-300"
          :class="dropdownIsOpen ? 'opacity-100' : 'opacity-0'">
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{{ `${user.firstName} ${user.lastName}` }}</div>
          </div>
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
              <router-link :to="{ name: 'YourArticle' }"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your
                articles</router-link>
            </li>
          </ul>
          <div class="py-1" @click="handleLogOut">
            <div
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">
              Sign
              out</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import searchIcon from "@/assets/icons/search.svg"
import Cookies from "js-cookie";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "Header",
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const selectedTag = computed(() => store.state.selectedTag)
    const isAuth = computed(() => store.state.isAuth)
    const user = ref({
      firstName: "",
      lastName: "",
      picture: ""
    })
    const dropdownIsOpen = ref(false)
    const keyTrigger = ref(false)

    watch(route, () => {
      dropdownIsOpen.value = false
      
      if (!Cookies.get("user")) return
      const parseOBJUser = JSON.parse(Cookies.get("user"))

      if (parseOBJUser.firstName) {
        store.commit("updateIsAuth", true)
        user.value = parseOBJUser
      }
    })

    watch(keyTrigger, () => {
      if (!Cookies.get("user")) {
        store.commit("updateIsAuth", false)
        user.value = {
          firstName: "",
          lastName: "",
          picture: ""
        }
      }
    })

    // make the dropdown to be disappear
    // without it, the button on dropdown still can be press even the opacity dropdown is 0
    watch(dropdownIsOpen, () => {
      const dropdown = document.querySelector('#userDropdown')
      if (!dropdownIsOpen.value) {
        setTimeout(() => {
          dropdown.style.display = "none"
        }, 270)
      } else {
        setTimeout(() => {
          dropdown.style.display = "block"
        }, 270)
      }
    })

    const handleDropdown = () => {
      dropdownIsOpen.value = !dropdownIsOpen.value
    }

    const handleKeyTrigger = () => {
      keyTrigger.value = !keyTrigger.value
    }

    const handleLogOut = () => {
      Cookies.remove("user")
      dropdownIsOpen.value = false
      handleKeyTrigger()
    }

    const handleToLogin = (page) => {
      if(page === 'signup') return router.push("/auth/login")
      router.push("/auth/signup")
    }

    return { searchIcon, selectedTag, isAuth, user, dropdownIsOpen, keyTrigger, handleDropdown, handleLogOut, handleKeyTrigger, handleToLogin, route }
  }
}
</script>

<style scoped>
nav a {
  color: #1C1C1C;
}

nav a.router-link-exact-active {
  color: #3652E1;
}
</style>