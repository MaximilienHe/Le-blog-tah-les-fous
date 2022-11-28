<template>
	<div id="app">
		<Header />
		<Register />
	</div>
</template>

<script>
import Header from '@/components/Header';
import Register from '@/components/Register';
export default {
	name: 'app',
	components: {
		Header,
		Register
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