<template>
	<div id="app">
		<Header />
		<ListPostCategory />
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import ListPostCategory from '../components/ListPostCategory.vue';
export default {
	name: 'app',
	components: {
		Header,
		ListPostCategory
	}
}
</script>

<style lang="scss">
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