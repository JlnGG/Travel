<template>
  <div>
    <div class="banner">
      <img :src="bannerImg" class="banner-img">
      <div class="bannerInfo">
        <p class="bannerTittle">{{sightName}}</p>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>
          39
        </div>
      </div>
    </div>
    <banner-gallary></banner-gallary>
  </div>
</template>

<script>
import BannerGallary from '@/common/gallary/Gallary'

export default {
  name: 'Banner',
  props:{
    bannerImg: String,
    sightName: String
  },
  components: {
    BannerGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner{
    overflow: hidden;
    position: relative
    padding-bottom: 55%;
    height: 0;
    color: #fff;
    .banner-img{
      width: 100%
    }
    .bannerInfo{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      display: flex;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0) , rgba(0, 0, 0, 0.8))
      .bannerTittle{
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;

      }
      .banner-number{
        padding: 0 .4rem;
        height: .32rem;
        line-height: .32rem;
        border-radius: .2rem;
        background: rgba(0,0,0,.8)
        font-size: .24rem;
        margin-top: .14rem;
        banner-icon{
          font-size: .24rem;
        }
      }
    }
  }
</style>
