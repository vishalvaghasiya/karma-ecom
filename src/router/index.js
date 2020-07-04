import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from "../views/Category";
import SingleProduct from "../views/SingleProduct";

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
    /*{
        path: '/single-product',
        name: 'SingleProduct',
        component: SingleProduct
    },{
        path: '/single-product',
        name: 'SingleProduct',
        component: SingleProduct
    },{
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
