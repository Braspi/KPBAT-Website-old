<template>
	<div class="panel">
		<Sidebar v-if="$route.name != 'panelLogin'"/>
		<router-view/>
	</div>
</template>

<script>
import Sidebar from '@/components/panel/Sidebar.vue';
export default {
	components: {
		Sidebar
	}
}
</script>