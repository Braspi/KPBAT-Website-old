<template lang="html">
	<div class="footer">
		<router-link to="/">
			<img src="@/assets/icon/logo/LOGO3.jpg" class="logo" alt="">
		</router-link>

		<div class="links">
			<router-link to="/" class="hua">{{ $t("footer.home") }}</router-link>
			<router-link to="/gallery" class="hua">{{ $t("footer.gallery") }}</router-link>
			<router-link to="#" class="hua">{{ $t("footer.how-works") }}</router-link>
			<a href="/#contact" class="hua">{{ $t("footer.contact") }}</a>
		</div>

		<div class="media">
			<a href="https://www.facebook.com/kpbat"><font-awesome-icon icon="fa-brands fa-facebook" class="fai"/></a>
			<a href="https://www.instagram.com/kp_bat/"><font-awesome-icon icon="fa-brands fa-instagram" class="fai"/></a>
			<a href="https://www.pinterest.fr/kp_bat/"><font-awesome-icon icon="fa-brands fa-pinterest" class="fai"/></a>
		</div>

		<hr size="1px">

		<div class="contact">
			<p class="number">+33 6 38 61 77 95</p>
			<p class="mail">support@kpbat.fr</p>
		</div>

		<div class="copyright">
			<p>&copy; 2022 KP BAT. All Rights Reserved</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style scoped src="@/assets/style/components/footer.less" lang="less">
</style>
