<template>
	<div class="manageUsers">
		<section>
			<h1>Admins:</h1>
			<div v-for="user in users" :key="user.id">
				<div v-if="user.role == 'ROLE_ADMIN'" class="admin invert">{{ user.id }}. {{ user.email }}</div>
			</div>
			<div class="add">
				<kp-input v-model="adminInput" label="Email"/>
				<button @click="addUser('ROLE_ADMIN')">Add Admin</button>
			</div>
		</section>
		<section>
			<h1>Users:</h1>
			<div v-for="user in users" :key="user.id">
				<div v-if="user.role == 'ROLE_USER'" class="user">{{ user.id }}. {{ user.email }}</div>
			</div>
			<div class="add">
				<kp-input v-model="userInput" label="Email"/>
				<button @click="addUser('ROLE_USER')">Add User</button>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			users: [],
			userInput: "",
			adminInput: "",
			selectedAdmin: false,
			selectedUser: false,
		}
	},
	created() {
		axios.get("/api/users").then((res) => {
			this.users = res.data;
		}).catch((e) => {
			console.error(e);
		})
	},
	methods: {
		addUser(type) {
			let email = "";
			if (type == 'ROLE_ADMIN') {
				email = this.adminInput;
			} else if (type == 'ROLE_USER') {
				email = this.userInput;
			}
			axios.post("/api/users", { "name": 6, "email": email, "role": type }).then((res) => {
				console.log(res);
				alert(res.data.password)
			}).catch((e) => {
				if (e.response.data.errors.includes("email format is invalid!")) {
					alert("idiota no")
				}
				console.error(e.response.data.errors);
			})
		}
	}
}
</script>

<style scoped src="@/assets/style/views/panel/users.less" lang="less">
</style>
