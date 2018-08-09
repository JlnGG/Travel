<template>
    <div class="menu">
      <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) of pages" :key="index">
            <div class="menu-icon"  v-for="item of item" :key="item.id">
                <div class="menu-img">
                    <img :src="item.imgUrl" class="img">
                </div>
                <p class="menu-p">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeMenu',
  props: {
    menu: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      var pages = []
      this.menu.forEach((item, index) => {
        var page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varstylus.styl'
    .swiper-container >>> .swiper-pagination-bullet{
          width: .12rem;
          height: .12rem;
    }
    .menu{
        overflow: hidden;
        height: 0;
        padding-bottom: 49.5%;
        padding-top: .1rem;
        .menu-icon{
            width: 25%;
            padding-bottom: 21%;
            float: left;
            position: relative;
            height: 0;
            .menu-img{
                padding: .4rem;
                padding-top: .1rem;
                overflow: hidden;
                .img{
                    width: 100%;
                    display:block;
                    margin: 0 auto;
                }
            }
            .menu-p{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: .44rem;
                line-height: .44rem;
                text-align: center;
                color: $menuTextColor;
                ellipsis();
            }
        }
    }
    .swiper-container{
      overflow: visible;
      .swiper-pagination{
        bottom:-12%;
      }
    }
</style>
