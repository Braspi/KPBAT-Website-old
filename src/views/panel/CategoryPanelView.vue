<template>
	<div class="galleryCategory">
		<section>
			<router-link to="/panel/gallery"><h1>← Back</h1></router-link>
			<div class="container">
				<template v-for="image in images" :key="image.id">
					<img :src="image.image" alt="image">
				</template>
			</div>
		</section>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			images: [],
		}
	},
	created() {
		axios.get("/api/images").then((res) => {
			// this.images = res.data.filter((c) => console.log(c));
			this.images = res.data.filter((c) => c.category.id == this.$route.params.id);
			for(let i = 0; i < this.images.length; i++) {
				this.images[i].image = `http://localhost:3000/api/images/${this.images[i].id}`;
			}
		}).catch((e) => {
			console.error(e);
		})
	}
}
</script>

<style scoped src="@/assets/style/views/panel/category.less" lang="less">
</style>
