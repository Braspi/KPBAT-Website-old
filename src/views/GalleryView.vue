<template>
    <div class="gallery">
        <div class="top">
            <p class="title">{{ $t("main.sections.s2.title") }}</p>
            <p class="desc">{{ $t("main.sections.s2.desc") }}</p>
        </div>
        <section class="container">
            <template v-for="category in categories" :key="category.id">
                <div @click="enableGallery(category.id-1)">
                    <img :src="category.miniatureName" class="contrast-bg">
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
                    <img :src="img.href">
                </Slide>
            </Carousel>

            <Carousel
                class="thumbnails"
                :items-to-show="items_to_show"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
                >
                <Slide v-for="(img, i) in filteredImages" :key="i">
                    <img :src="img.href" class="carousel__item" @click="slideTo(i)">
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
            items_to_show: 5,
        }
    },
    created() {
        axios.get("/categories").then((res) => {
            this.categories = res.data;

            for (let i = 0; i < this.categories.length; i++) {
                this.categories[i].miniatureName = `${axios.defaults.baseURL}/categories/${i+1}/miniature`;
                axios.get(`/categories/${i+1}`).then((res) => {
                    let val = res.data.images;
                    for (let j = 0; j < val.length; j++) {
                        val[j].href = `${axios.defaults.baseURL}/categories/${i+1}/images/${val[j].systemFileName}`
                    }
                    this.images.unshift(val);
                }).catch((e) => {
                    console.error(e);
                })
            }
        }).catch((e) => {
            console.error(e);
        })
    },
    updated() {
        this.items_to_show = (window.innerWidth/240).toFixed()
    },
    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },
        enableGallery(id) {
            this.filteredImages = this.images[id];
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

