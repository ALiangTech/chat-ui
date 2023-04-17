import { createRouter, createWebHistory } from 'vue-router'
import Chat from "./../pages/chat/index.vue"
import Home from './../pages/home/index.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/chat', component: Chat },
  ]

  export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
  })