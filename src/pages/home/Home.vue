<template>
<div>
 <Home-header></Home-header>
 <Home-swiper></Home-swiper>
 <Home-menu></Home-menu>
 <Home-recommend></Home-recommend>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeMenu from './components/Menu'
import HomeRecommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMenu,
    HomeRecommend
  }
}
</script>

<style>

</style>
