<template>
    <!-- Start Header Area -->
    <div id="nav">
        <header class="header_area sticky-header">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light main_box">
                    <div class="mt-0 container">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <a class="navbar-brand logo_h" href="/"><img src="img/logo.png" alt=""></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto">

                                <li class="nav-item active">
                                    <router-link to="/" exact class="nav-link">Home</router-link>
                                    <!--<a class="nav-link" href="/">Home</a>-->
                                </li>

                                <!--<li class="nav-item">
                                    <router-link to="/" exact active-class="active" class="nav-link">Home</router-link>
                                </li>-->

                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true"
                                       aria-expanded="false">Shop</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link to="/category" exact class="nav-link"> Shop Category
                                            </router-link>
                                            <!--<a class="nav-link" href="/category">Shop Category</a>-->
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/product-description" exact class="nav-link">Product
                                                Details
                                            </router-link>
                                            <!--<a class="nav-link" href="/product-description">Product
                                                Details</a>-->
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/checkout" exact class="nav-link">
                                                Product Checkout
                                            </router-link>
                                            <!--<a class="nav-link" href="/checkout">Product
                                                Checkout</a>-->
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/cart" exact class="nav-link"> Shopping Cart</router-link>
                                            <!--<a class="nav-link" href="/cart">Shopping Cart</a>-->
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/confirmation" exact class="nav-link">Confirmation
                                            </router-link>
                                            <!--<a class="nav-link"
                                               href="/confirmation">Confirmation</a>-->
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true"
                                       aria-expanded="false">Blog</a>
                                    <ul class="dropdown-menu">

                                        <li class="nav-item">
                                            <router-link to="/blog" exact class="nav-link">Blog</router-link>
                                            <!--<a class="nav-link" href="/blog">Blog</a>-->
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/blog-description" class="nav-link">Blog Details
                                            </router-link>
                                            <!--<a class="nav-link" href="/blog-description">Blog
                                            Details</a>-->
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                       aria-haspopup="true"
                                       aria-expanded="false">Pages</a>
                                    <ul class="dropdown-menu">

                                        <li class="nav-item">
                                            <router-link class="nav-link" to="/login" exact>Login</router-link>
                                            <!--<a class="nav-link" href="/login">Login</a>-->
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" to="/tracking" exact>Tracking</router-link>
                                            <!--<a class="nav-link" href="/tracking">Tracking</a>-->
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/contact" exact>Contact</router-link>
                                    <!--<a class="nav-link" href="/contact">Contact</a>-->
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li class="nav-item"><a href="#" class="cart"><span class="ti-bag"></span></a></li>
                                <li class="nav-item">
                                    <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="search_input" id="search_input_box">
                <div class="container">
                    <form class="d-flex justify-content-between">
                        <input type="text" class="form-control" id="search_input" placeholder="Search Here">
                        <button type="submit" class="btn"></button>
                        <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
                    </form>
                </div>
            </div>
        </header>
    </div>
    <!-- End Header Area -->
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style>
    .sticky-wrapper {
        position: absolute;
        top: unset;
        width: 100%;
    }

    /*
    position: relative; Full Image
    position: absolute; Top image on header
    top: 40px;*/
</style>