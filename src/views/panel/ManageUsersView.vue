<template>
	<div class="manageUsers">
		<section>
			<h1>Admins:</h1>
			<div v-for="user in users" :key="user.id">
				<div v-if="user.role == 'ROLE_ADMIN'" class="admin invert">{{ user.id }}. {{ user.email }}</div>
			</div>
			<div class="add">
				<div>
					<kp-input v-model="adminNameInput" label="Name"/>
					<kp-input v-model="adminEmailInput" label="Email"/>
				</div>
				<button @click="addUser('ROLE_ADMIN')">Add Admin</button>
			</div>
		</section>
		<section>
			<h1>Users:</h1>
			<div v-for="user in users" :key="user.id">
				<div v-if="user.role == 'ROLE_USER'" class="user">{{ user.id }}. {{ user.email }}</div>
			</div>
			<div class="add">
				<div>
					<kp-input v-model="userNameInput" label="Name"/>
					<kp-input v-model="userEmailInput" label="Email"/>
				</div>
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
			userNameInput: "",
			userEmailInput: "",
			adminNameInput: "",
			adminEmailInput: "",
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
			let name = "";
			let email = "";
			if (type == 'ROLE_ADMIN') {
				name = this.adminNameInput;
				email = this.adminEmailInput;
			} else if (type == 'ROLE_USER') {
				name = this.userNameInput;
				email = this.userEmailInput;
			}
			axios.post("/api/users", { "name": name, "email": email, "role": type }).then((res) => {
				alert(`Hasło dla użytkownika: ${res.data.password}`)
			}).catch((e) => {
				if (e.response.data.errors.includes("email format is invalid!")) {
					alert("Email format is invalid!")
				}
				console.error(e.response.data.errors);
			})
		}
	}
}
</script>

<style scoped src="@/assets/style/views/panel/users.less" lang="less">
</style>
