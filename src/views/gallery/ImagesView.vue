<template>
    <div class="category">
        <template>
            <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">{{ slide }}</div>
                </Slide>
            </Carousel>

            <Carousel
                id="thumbnails"
                :items-to-show="4"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
            >
            <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
            </Slide>
        </Carousel>
    </template>
</div>
</template>


<style scoped src="@/assets/style/views/gallery/category.less" lang="less">
</style>

<script>
import axios from "axios";

import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
    data: () => ({
        currentSlide: 0,
        images: []
    }),
    created() {
        axios.get("/api/images").then((res) => {
            this.images = res.data.filter((c) => c.category.id == this.$route.params.id);
            for(let i = 0; i < this.images.length; i++) {
                this.images[i].image = `http://localhost:3000/api/images/${this.images[i].id}`;
            }
        }).catch((e) => {
            console.error(e);
        })
    },
    methods: {
        slideTo(val) {
           this.currentSlide = val
        },
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
}
</script>
