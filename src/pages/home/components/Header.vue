<template>
	<div class="header">
		<div class="header-left">返回</div>
		<div class="header-input">输入城市/景点/游玩主题</div>
		<div class="header-right">城市</div>
	</div>
</template>

<script>
export default {
	name: "HomeHeader"
}
</script>

<style lang="stylus" scoped>
	.header
		height:.86rem
		display:flex
		background: #00bcd4
		color: #fff
		line-height: .86rem
		.header-left
			width: .64rem
			float: left
		.header-input
			background: #fff
			flex:1
			margin-top: .12rem
			margin-left: .2rem
			height:.64rem
			border-radius: .1rem
			color: #ccc
			line-height: .64rem
			height: .64rem
		.header-right	
			width: 1.24rem
			float: right
			text-align: center
</style>