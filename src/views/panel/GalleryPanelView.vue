<template>
	<div class="galleryPanel">
		<section>
			<div class="categories">
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
			</div>
			<div class="create">
				<kp-input label="Name" v-model="name" />
				<kp-input label="Description" v-model="description" />
				<kp-input label="Miniature" v-model="miniature" />
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
			name: "",
			description: "",
			miniature: "",
		}
	},
	created() {
		axios.get("/api/categories").then((res) => {
			this.categories = res.data;
		}).catch((e) => {
			console.error(e);
		})
	},
	methods: {
		createCategory() {

		}
	}
}
</script>

<style scoped src="@/assets/style/views/panel/gallery.less" lang="less">
</style>
