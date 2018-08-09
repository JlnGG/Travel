<template>
    <div class="menu">
      <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) of pages" :key="index">
            <div class="menu-icon"  v-for="item of item" :key="item.id">
                <div class="menu-img">
                    <img :src="item.src" class="img">
                </div>
                <p class="menu-p">{{item.name}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeMenu',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      menu: [{
        id: '001',
        src: '../../../../static/menu-img/f3dd6c383aeb3b02.png',
        name: '景点门票'
      },
      {
        id: '002',
        src: '../../../../static/menu-img/一日游.png',
        name: '一日游'
      },
      {
        id: '003',
        src: '../../../../static/menu-img/郑州必游.png',
        name: '郑州必游'
      },
      {
        id: '004',
        src: '../../../../static/menu-img/夏日玩水.png',
        name: '夏日玩水'
      },
      {
        id: '005',
        src: '../../../../static/menu-img/名胜古迹.png',
        name: '名胜古迹'
      },
      {
        id: '006',
        src: '../../../../static/menu-img/自然风光.png',
        name: '自然风光'
      },
      {
        id: '007',
        src: '../../../../static/menu-img/当地好玩.png',
        name: '当地好玩'
      },
      {
        id: '008',
        src: '../../../../static/menu-img/学生专享.png',
        name: '学生专享'
      },
      {
        id: '009',
        src: '../../../../static/menu-img/汽车票.png',
        name: '汽车票'
      },
      {
        id: '010',
        src: '../../../../static/menu-img/惠游栾川.png',
        name: '惠游栾川'
      }]
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
                padding: .38rem;
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
