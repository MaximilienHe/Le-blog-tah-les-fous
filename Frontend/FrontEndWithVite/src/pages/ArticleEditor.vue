<template>
	<div id="app">
		<Header />
		<VueTrix v-model="editorContent" placeholder="Enter content" localStorage/>
	</div>
</template>

<script>
import Header from '@/components/Header';
export default {
	name: 'app',
	components: {
		Header
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