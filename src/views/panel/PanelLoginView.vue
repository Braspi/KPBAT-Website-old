<template>
	<div class="panelLogin">
		<main>
			<p class="title">Login to Continue </p>
			<div>
				<img src="@/assets/icon/logo/LOGO2.jpg" alt="">
				<form>
					<span class="break">
						<label for="user">Username</label>
						<input type="text" id="user">
					</span>
					<span class="break">
						<label for="pass">Password</label>
						<input type="password" id="pass">
					</span>
					<input type="button" value="Login" @click="login()">
				</form>
			</div>
			<p class="copy">&copy; 2022 KP BAT. All rights Reserved</p>
		</main>
	</div>
</template>

<script>
export default {
	methods: {
		login() {
			this.$router.push("/panel")
		}
	}
}
</script>

<style scoped src="@/assets/style/views/panel/login.less" lang="less">
</style>