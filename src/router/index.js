import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import CreateArticle from '../views/CreateArticle.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/articles/category/:category',
    name: 'Articles',
    component: ArticleView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetailView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/articles/create',
    name: 'CreateArticle',
    component: CreateArticle,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { transition: 'slide-left' },
  },
  // auth page
  {
    path: '/auth/signup',
    name: 'SignUp',
    component: SignUpView,
    meta: { transition: 'slide-left' },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginView,
    meta: { transition: 'slide-left' },
  },
  
  // articles category
  {
    path: '/articles/category/:category',
    name: 'categoryArticles',
    component: ArticleView,
    meta: { transition: 'slide-left' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
