<template>
  <div>
    <div class="tittle">周末去哪儿</div>
    <ul>
      <li v-for="item of weekends" :key="item.id" class="recommend-li">
        <div class="recommend-img">
          <img :src="item.imgUrl" class="img">
        </div>
        <div class="recommend-intro">
          <p class="recommend-tittle">{{item.title}}</p>
          <p class="recommend-text">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekends',
  props: {
    weekends: Array
  },
  data () {
    return {
      imgs: [
        {
          id: '001',
          src: '../../../../static/weekends-img/郑州必游.jpg',
          tittle: '郑州必游TOP10',
          text: '郑州必游TOP10'
        },
        {
          id: '002',
          src: '../../../../static/weekends-img/郑州必游.jpg',
          tittle: '郑州必游TOP10',
          text: '郑州必游TOP10'
        },
        {
          id: '003',
          src: '../../../../static/weekends-img/郑州必游.jpg',
          tittle: '郑州必游TOP10',
          text: '郑州必游TOP10'
        },
        {
          id: '004',
          src: '../../../../static/weekends-img/郑州必游.jpg',
          tittle: '郑州必游TOP10',
          text: '郑州必游TOP10'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varstylus.styl'
  .tittle{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .recommend-img{
    overflow: hidden;
    height: 0;
    padding-bottom:33.9%;
    .img{
      width: 100%;
    }
  }
  .recommend-intro{
    padding: .1rem;
    min-width: 0;
    .recommend-tittle{
      line-height: .54rem;
      font-size: .32rem;
      ellipsis();
    }
    .recommend-text{
      line-height: .4rem;
      color: #ccc;
      ellipsis();
    }
  }
</style>
