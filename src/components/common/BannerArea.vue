<template>
    <!-- Start Banner Area -->
    <section class="banner-area organic-breadcrumb">
        <div class="container">
            <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div class="col-first">
                    <h1>{{title}}</h1>
                    <nav class="d-flex align-items-center">
                        <a href="/">Home<span class="lnr lnr-arrow-right"></span></a>
                        <a href="">{{navName}}<span class="lnr lnr-arrow-right"></span></a>
                        <a :href="url">{{pageName}}</a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <!-- End Banner Area -->
</template>

<script>
    export default {
        name: "BannerArea",
        props: {
            title: String,  /*Product Details Page*/
            navName: String,  /*Shop*/
            pageName: String,   /*product-details*/
            url: String,
        }
    }
</script>

<style scoped>

</style>