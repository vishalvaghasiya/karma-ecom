import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from "../views/Category";
import ProductDescription from "../views/ProductDescription";
import Checkout from "../views/Checkout";
import Cart from "../views/Cart";
import Confirmation from "../views/Confirmation";
import Contact from "../views/Contact";

import Blog from "../views/Blog";
import BlogDescription from "../views/BlogDescription";


Vue.use(VueRouter)

const routes = [
    {path: '/',name: 'Home',component: Home},
    {path: '/category',name: 'Category',component: Category},
    {path: '/product-description',name: 'ProductDescription',component: ProductDescription},
    {path: '/checkout',name: 'Checkout',component: Checkout},
    {path: '/cart',name: 'Cart',component: Cart},
    {path: '/confirmation',name: 'Confirmation',component: Confirmation},
    {path: '/blog',name: 'Blog',component: Blog},
    {path: '/blog-description',name: 'BlogDescription',component: BlogDescription},
    {path: '/contact',name: 'Contact',component: Contact},
    /*{
        path: '/',
        name: '',
        component:
    },*/
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
