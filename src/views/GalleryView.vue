<template>
    <div class="gallery">
        <div class="top">
            <p class="title">{{ $t("main.sections.s2.title") }}</p>
            <p class="desc">{{ $t("main.sections.s2.desc") }}</p>
        </div>
        <section class="container">
            <template v-for="category in categories" :key="category.id">
                <div @click="enableGallery(category.id)">
                    <img :src="category.miniature" class="contrast-bg">
                    <p class="contrast-el">{{ category.name }}</p>
                </div>
            </template>
        </section>

        <div class="galleryMenu" v-if="galleryShown">
            <Carousel class="thumbnailBig" 
                :items-to-show="1" 
                :wrap-around="true" 
                v-model="currentSlide"
                >
                <Slide v-for="(img, i) in filteredImages" :key="i">
                    <img :src="img.image">
                </Slide>
            </Carousel>

            <Carousel
                class="thumbnails"
                :items-to-show="7"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
                >
                <Slide v-for="(img, i) in filteredImages" :key="i">
                    <img :src="img.image" class="carousel__item" @click="slideTo(img.id - 1)">
                </Slide>
            </Carousel>
        </div>
        <div v-if="galleryShown" class="hide" />
        <font-awesome-icon icon="fa-solid fa-x" v-if="galleryShown" @click="disableGallery"/>
    </div>
</template>


<style scoped src="@/assets/style/views/gallery.less" lang="less">
</style>

<script>
import axios from "axios";
import Nav from '@/components/Nav.vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    data() {
        return {
            galleryShown: false,
            currentGallery: 0,
            categories: [],
            currentSlide: 0,
            images: [],
            filteredImages: [],
        }
    },
    created() {
        axios.get("/api/categories").then((res) => {
            this.categories = res.data;
        }).catch((e) => {
            console.error(e);
        })
        axios.get("/api/images").then((res) => {
            this.images = res.data.filter((c) => {
                if (c.category) return true;
            });

            //! ------- Remove Later ------- !//
            for(let i = 0; i < this.images.length; i++) {
                this.images[i].image = `${axios.defaults.baseURL}/api/images/${this.images[i].id}`;
            }
            //! ------- Remove Later ------- !//
        }).catch((e) => {
            console.error(e);
        })
    },
    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },
        enableGallery(id) {
            this.filteredImages = this.images.filter(img => img.category.id == id)
            this.currentGallery = id;
            this.galleryShown = true;

            document.querySelector('body').style.overflowY = 'hidden';
        },
        disableGallery() {
            this.galleryShown = false;
            this.currentSlide = 0;
            document.querySelector('body').style.overflowY = 'auto';
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Nav,
    }
}
</script> 

