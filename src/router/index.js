import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from "../views/Category";
import SingleProduct from "../views/SingleProduct";
import Checkout from "../views/Checkout";
import Cart from "../views/Cart";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/single-product',
        name: 'SingleProduct',
        component: SingleProduct
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    /*{
        path: '/single-product',
        name: 'SingleProduct',
        component: SingleProduct
    },*/
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
