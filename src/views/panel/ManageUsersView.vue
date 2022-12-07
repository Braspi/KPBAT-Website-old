<template>
	<div class="manageUsers">
		<section>
			<h1>Admins:</h1>
			<div v-for="user in users" :key="user.id">
				<div v-if="user.role == 'ROLE_ADMIN'" class="admin invert">{{ user.id }}. {{ user.email }}</div>
			</div>
		</section>
		<section>
			<h1>Users:</h1>
			<div v-for="user in users" :key="user.id">
				<div v-if="user.role == 'ROLE_USER'" class="user">{{ user.id }}. {{ user.email }}</div>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			users: []
		}
	},
	created() {
		axios.get("/api/users").then((res) => {
			console.log(res);
			this.users = res.data;
		}).catch((e) => {
			console.error(e);
		})
	}
}
</script>

<style scoped src="@/assets/style/views/panel/users.less" lang="less">
</style>