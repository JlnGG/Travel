<template>
  <div class="wraper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of imgs" :key="item.id">
        <img :src="item.src" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      imgs: [
        {
          id: '001',
          src: '../../static/swiper-img/1f90698c1bc40902.jpg'
        },
        {
          id: '002',
          src: '../../static/swiper-img/2065748847848202.jpg'
        },
        {
          id: '003',
          src: '../../static/swiper-img/acbabf4bac592002.jpg'
        }
      ]
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
    padding-bottom: 26.6%;
    background-color:#eee;
    .swiper-img{
      width: 104%;
    }
  }
</style>
