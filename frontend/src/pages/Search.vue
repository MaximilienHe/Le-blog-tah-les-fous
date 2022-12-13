<script>
import Header from '../components/Header.vue';
import ListPostSearch from '../components/ListPostSearch.vue';
export default {
	props: ["search"],
	name: 'app',
	components: {
		Header,
		ListPostSearch
	},
	mounted () {
		console.log(this.$route.params);
	}
}
</script>

<template>
	<div id="app">
		<Header/>
		<ListPostSearch/>
	</div>
</template>



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