<template>
	<div class="gallery">
		<div class="top">
			<p class="title">{{ $t("main.sections.s2.title") }}</p>
			<p class="desc">{{ $t("main.sections.s2.desc") }}</p>
		</div>
		<section class="container">
			<div class="images">
				<template v-for="i in 4" :key="i">
					<div class="images__column">
						<template v-for="image in images[i-1]" :key="image.id">
							<a href="_" target="_blank" class="images__link">
								<figure class="images__thumb">
									<img :src="image.href" alt="Coppy right strajk galery Bby Barspi" class="images__image">
									<figcaption class="images__caption">Coppy right strajk galery Bby Barspi</figcaption>
								</figure>
							</a>
						</template>
					</div>
				</template>
			</div>
		</section>

		<div class="galleryMenu" v-if="galleryShown">
			<Carousel class="thumbnailBig" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
				<Slide v-for="(img, i) in filteredImages" :key="i">
					<img :src="img.href">
				</Slide>
			</Carousel>

			<Carousel class="thumbnails" :items-to-show="items_to_show" :wrap-around="true" v-model="currentSlide" ref="carousel" >
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
			categories: [],
			currentSlide: 0,
			images: [],
			filteredImages: [],
			items_to_show: 5,
		}
	},
	created() {
		axios.get(`/categories/1`).then((res) => {
			let val = res.data.images;
			for (let i = 0; i < val.length; i++) {
				val[i].href = `${axios.defaults.baseURL}/categories/1/images/${val[i].systemFileName}`
			}
			for (let i = 0; i < val.length; i+=3) {
				this.images.push(val.slice(i, i+3));
			}
			console.log(this.images);
		}).catch((e) => {
			console.error(e);
		})

		const nav = document.querySelector("div.nav div.burger div.inner");
		if(!nav.classList.contains("hidden")) {
			nav.classList.add("hidden");
		}
	},
	updated() {
		this.items_to_show = (window.innerWidth/240).toFixed()
	},
	methods: {
		slideTo(val) {
			this.currentSlide = val;
		},
		enableGallery(id) {
			this.filteredImages = this.images;
			this.currentSlide = id;
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
