<template>
  <div class="wraper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperImg" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperImg: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wraper >>> .swiper-pagination-bullet-active{
    background: white;
  }
  .wraper{
    width: 100%;
    height: 0;
    padding-bottom: 31.2%;
    background-color:#eee;
    .swiper-img{
      width: 100%;
    }
  }
</style>
