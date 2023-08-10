import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import CreateArticle from '../views/CreateArticle.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import YourArticle from '../views/YourArticle.vue'
import AddArticle from '../views/AddArticle.vue'
import EditArticle from '../views/EditArticle.vue'
import Cookies from 'js-cookie'
import { ref } from 'vue'

const isAuth = ref(Cookies.get("user"))

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/articles/category/:category',
    name: 'Articles',
    component: ArticleView,
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetailView,
  },
  {
    path: '/articles/create',
    name: 'CreateArticle',
    component: CreateArticle,
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  // auth page
  {
    path: '/auth/signup',
    name: 'SignUp',
    component: SignUpView,
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginView,
  },
  
  // articles category
  {
    path: '/articles/category/:category',
    name: 'categoryArticles',
    component: ArticleView,
  },

  {
    path: '/my-articles',
    name: 'YourArticle',
    component: YourArticle,
    meta: {
      auth: true
    }
  },
  {
    path: '/add-article',
    name: 'AddArticle',
    component: AddArticle,
    meta: {
      auth: true
    }
  },
  {
    path: '/edit-article/:id',
    name: 'EditArticle',
    component: EditArticle,
    meta: {
      auth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)

  if(!to.meta.auth) return next()
  if(!isAuth.value) return next('/auth/login')
  next()
})

export default router
