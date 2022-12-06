<template>
	<div id="app">
		<Header />
        <DashboardAdmin />
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import DashboardAdmin from '../components/DashboardPanel.vue';
export default {
	name: 'app',
	components: {
		Header,
        DashboardAdmin
	}
}
</script>

<style lang="scss" scoped>
body {
	background-color: #F3F3F3;
	font-family: "Rockwell", serif;
	h3 {
		color: #171717;
		font-size: 28px;
		font-weight: 700;
	}
}
</style>