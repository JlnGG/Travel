<template>
  <div>
    <div class="tittle">热销推荐</div>
    <ul>
      <li v-for="item of imgs" :key="item.id" class="recommend-li">
        <div class="recommend-img">
          <img :src="item.src" class="img">
        </div>
        <div class="recommend-intro">
          <p class="recommend-tittle">{{item.tittle}}</p>
          <p class="recommend-text">{{item.text}}</p>
          <button class="recommend-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      imgs: [
        {
          id: '001',
          src: '../../../../static/recommend-img/嵩山.jpg',
          tittle: '嵩山',
          text: '嵩山'
        },
        {
          id: '002',
          src: '../../../../static/recommend-img/嵩山.jpg',
          tittle: '嵩山',
          text: '嵩山'
        },
        {
          id: '003',
          src: '../../../../static/recommend-img/嵩山.jpg',
          tittle: '嵩山',
          text: '嵩山'
        },
        {
          id: '004',
          src: '../../../../static/recommend-img/嵩山.jpg',
          tittle: '嵩山',
          text: '嵩山'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varstylus.styl'
  .tittle{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .recommend-li{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    border-bottom: .02rem solid grey;
    .recommend-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
      .img{
        width: 100%;
      }
    }
    .recommend-intro{
      flex: 1;
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
      .recommend-button{
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
</style>
