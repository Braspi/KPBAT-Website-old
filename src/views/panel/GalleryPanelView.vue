<template>
	<div class="galleryPanel">
		<section>
			<h1>Select category:</h1>
			<div class="container">
				<template v-for="category in categories" :key="category.id">
					<router-link :to="`/panel/gallery/${category.id}`">
						<img :src="category.miniature" alt="image">
						<p>{{ category.name }}</p>
						<p>{{ category.description }}</p>
					</router-link>
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
			categories: [],
		}
	},
	created() {
		axios.get("/api/categories").then((res) => {
			this.categories = res.data;
		}).catch((e) => {
			console.error(e);
		})
	}
}
</script>

<style scoped src="@/assets/style/views/panel/gallery.less" lang="less">
</style>
