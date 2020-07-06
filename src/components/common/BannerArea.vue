<template>
    <!-- Start Banner Area -->
    <section class="banner-area organic-breadcrumb">
        <div class="container">
            <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                <div class="col-first">
                    <h1>{{PageTitle}}</h1>
                    <nav class="d-flex align-items-center">
                        <a href="/index">Home<span class="lnr lnr-arrow-right"></span></a>
                        <a :href="navUrl">{{NavTabName}}<span class="lnr lnr-arrow-right"></span></a>
                        <a :href="url">{{PageName}}</a>
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
            PageTitle: String,  /*Product Details Page*/
            navUrl: String,  /*/nav*/
            NavTabName: String,  /*Shop*/
            PageName: String,   /*product-details*/
            url: String,
        }
    }
</script>

<style scoped>

</style>