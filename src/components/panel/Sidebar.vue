<template>
	<div class="sidebar">
		<div class="container">
			<router-link to="/panel/gallery"><span :class="[([`galleryCategory`, 'galleryPanel'].includes(this.$route.name)) ? `active` : '']"></span>Gallery Add</router-link>
			<router-link to="/panel/stats"><span :class="[(this.$route.name == `stats`) ? `active` : '']"></span>Website Stats</router-link>
			<router-link to="/panel/users"><span :class="[(this.$route.name == `users`) ? `active` : '']"></span>Manage Users</router-link>
		</div>
	</div>
</template>

<style scoped src="@/assets/style/components/panel/sidebar.less" lang="less">
</style>
