<template>
	<div id="app">
		<Header />
		<Article />
	</div>
</template>

<script>
import Header from '@/components/Header';
import Article from '@/components/SingleArticleDisplay.vue'
export default {
	name: 'app',
	components: {
		Header,
		Article
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