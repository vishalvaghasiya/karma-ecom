<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
    import Navbar from "./components/Navbar";
    import Footer from "./components/Footer";

    export default {
        components: {
            Footer,
            navbar : Navbar}
    }
</script>

<style>
    /*    #app {
            font-family: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
        }*/
</style>