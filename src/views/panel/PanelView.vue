<template>
	<div class="panel">
		<Sidebar v-if="$route.name != 'panelLogin'"/>
		<router-view/>
	</div>
</template>

<script>
import Sidebar from '@/components/panel/Sidebar.vue';
import axios from 'axios';
export default {
	components: {
		Sidebar
	},
	created() {
		axios.get("/api/auth/me").then((res) => {
			if (!res.data.authenticated) {
				localStorage.clear();
				this.$router.push("/panel/login");
			}
		}).catch((e) => {
			console.error(e);
		})
	}
}
</script>