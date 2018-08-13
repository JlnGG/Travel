<template>
<div>
 <Home-header></Home-header>
 <Home-swiper :swiperImg="swiperImg"></Home-swiper>
 <Home-menu :menu="menu"></Home-menu>
 <Home-recommend :recommend="recommend"></Home-recommend>
 <Home-weekends :weekends="weekends"></Home-weekends>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeMenu from './components/Menu'
import HomeRecommend from './components/Recommend'
import HomeWeekends from './components/Weekends'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeMenu,
    HomeRecommend,
    HomeWeekends
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const data = res.data
      const dataI = res.data.data
      if (data.ret && dataI) {
        this.swiperImg = dataI.swiperList
        this.recommend = dataI.recommendList
        this.weekends = dataI.weekendList
        this.menu = dataI.menuList
      }
    }
  },
  data () {
    return {
      swiperImg: [],
      recommend: [],
      weekends: [],
      menu: []
    }
  }
}
</script>

<style>

</style>
