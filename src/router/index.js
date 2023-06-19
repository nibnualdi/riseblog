import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import CreateArticle from '../views/CreateArticle.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/articles',
    name: 'Articles',
    component: ArticleView
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetailView
  },
  {
    path: '/articles/create',
    name: 'CreateArticle',
    component: CreateArticle
  },
  {
    path: '/',
    name: 'About',
    component: HomeView
  },
  {
    path: '/',
    name: 'Contact',
    component: HomeView
  },
  // auth page
  {
    path: '/auth/signup',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: LoginView
  },
  
  // articles category
  {
    path: '/articles/:category',
    name: 'categoryArticles',
    component: ArticleView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
