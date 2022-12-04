<template>
	<div class="panelLogin">
		<main>
			<p class="title">Login to Continue </p>
			<div>
				<img src="@/assets/icon/logo/LOGO2.jpg" alt="">
				<form>
					<span class="break">
						<label for="user">Username</label>
						<input type="text" id="user" v-model="username">
					</span>
					<span class="break">
						<label for="pass">Password</label>
						<input type="password" id="pass"  v-model="password">
					</span>
					<input type="button" value="Login" @click="login()">
				</form>
			</div>
			<p class="copy">&copy; 2022 KP BAT. All rights Reserved</p>
		</main>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			username: "",
			password: "",
		}
	},
	methods: {
		login() {
			axios.post("/api/auth/login", { email: this.username, password: this.password }).then((res) => {
				if (res.status == 200) {
					localStorage.accessToken = res.data.accessToken;
					this.$router.push("/panel");
				}
			}).catch((e) => {
				console.error(e);
			})
		}
	}
}
</script>

<style scoped src="@/assets/style/views/panel/login.less" lang="less">
</style>
