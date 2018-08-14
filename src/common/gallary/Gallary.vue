<template>
	<div class="container">
		<div class="wrapper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="item of swiperImg" :key="item.id">
					<img :src="item.imgUrl" class="swiper-img">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BannerGallary'
}
</script>

<style lang='stylus' scoped>
	.container{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		top: 0;
		bottom: 0;
		background: #000;
		z-index: 99;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.wrapper{
			background: #fff;
		}
	}
</style>