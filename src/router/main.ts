// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/Default/LDefault.vue'
import Home from '../views/PIndex.vue'
import About from '../views/PAbout.vue'
import PSingle from '../views/Products/PSingle.vue'
const routes = [
    {
        path: '/',
        component: Layout, // layout with header/footer
        children: [
            { path: '/', name: 'Home', component: Home, meta: { breadcrumb: "Home" } },
            { path: 'About', name: 'Projects', component: About, alias: ['about', 'spark', 'yangi',], meta: {breadcrumb: "About"}  },
            {path: '/products/:id', name: 'ProductSingle', component: PSingle, }
        ]
    },
    {
  path: '/:pathMatch(.*)*', // для любых несуществующих путей
  name: 'NotFound',
  component: () => import('../views/NotFound.vue') // или прямой импорт
}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

