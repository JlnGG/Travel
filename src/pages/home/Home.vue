<template>
<div>
 <Home-header></Home-header>
 <Home-swiper></Home-swiper>
 <Home-menu></Home-menu>
 <Home-recommend></Home-recommend>
 <Home-weekends></Home-weekends>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeMenu from './components/Menu'
import HomeRecommend from './components/Recommend'
import HomeWeekends from './components/Weekends'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMenu,
    HomeRecommend,
    HomeWeekends
  }
}
</script>

<style>

</style>
