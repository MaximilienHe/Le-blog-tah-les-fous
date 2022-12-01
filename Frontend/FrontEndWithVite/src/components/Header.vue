<template>
	<header>
		<div class="left">
			<a href="/">
				<div class="Logo">
					<img src="../assets/logo-maximilienherr.png" height="60px">
				</div>
			</a>
		</div>

		<div class="center">
			<h3>Actualités</h3>
			<h3>Tests</h3>
		</div>

		<div class="right">
			<label for="search-bar">
				<img src="../assets/search-icon.png" class="icon" />
				<input type="text" id="search-bar" name="search-bar" placeholder="Type to search..." />
			</label>
		</div>

		<div class="far-right">
			<a href="/login"><img src="../assets/user-icon.png" class="icon" /></a>
		</div>
	</header>
</template>

<script>
export default {
	name: 'header-website'
}
</script>

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 50px 0px;
	margin-bottom: 10vh;

	.left {
		flex: 1;

		h3 {
			font-size: 20px;
			font-style: italic;
			font-weight: 400;
			margin: 0;

			&.bottom {
				text-align: right;
			}
		}

		h1 {
			color: #171717;
			font-size: 32px;
			margin: 0;
		}
	}

	.center {
		width: 20vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.right {
		flex: 1;
		display: flex;
		justify-content: flex-end;

		label {
			position: relative;
			display: block;
			width: 300px;

			input {
				width: 100%;
				height: 35px;
				background-color: #FFFFFF;
				box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
				margin: 0;
				padding: 5px 0px 0px 35px;
				box-sizing: border-box;
				appearance: none;
				border: none;
				outline: none;
				color: #171717;
				font-family: 'Rockwell', serif;
				font-size: 16px;

				&::placeholder {
					color: #888888;
				}
			}


			.icon {
				position: absolute;
				width: 25px;
				margin: 5px;
			}
		}
	}

	.far-right {
		margin-left: 20px;

		.icon {
			width: 25px;
		}
	}
}
</style>