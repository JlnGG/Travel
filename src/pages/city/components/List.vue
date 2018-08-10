<template>
  <div class="list">
    <div class="area">
      <div class="city">当前城市</div>
      <div class="buttons-city">
        <div class="button-city">北京</div>
      </div>
    </div>
    <div class="area">
      <div class="city">热门城市</div>
      <div class="buttons-city">
        <div class="button-city">北京</div>
      </div>
      <div class="buttons-city">
        <div class="button-city">北京</div>
      </div>
      <div class="buttons-city">
        <div class="button-city">北京</div>
      </div>
      <div class="buttons-city">
        <div class="button-city">北京</div>
      </div>
      <div class="buttons-city">
        <div class="button-city">北京</div>
      </div>
    </div>
    <div class="area">
      <div class="city">A</div>
      <div class="city-list">
        <ul class="city-ul">
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
        </ul>
      </div>
    </div>
    <div class="area">
      <div class="city">B</div>
      <div class="city-list">
        <ul class="city-ul">
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
        </ul>
      </div>
    </div>
    <div class="area">
      <div class="city">C</div>
      <div class="city-list">
        <ul class="city-ul">
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
          <li class="city-li">北京</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varstylus.styl'

  .list{
    position:absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    .area{
      &:after{
        content: '';
        display: block;
        clear: both;
      }
      .city{
        line-height: .4rem;
        background-color: #eee;
        padding-left: .2rem;
        color: #666;
        font-size: .26rem;
        border-top: .02rem solid #ccc;
        border-bottom: .02rem solid #ccc;
      }
      .buttons-city{
        overflow: hidden;
        padding: .1rem 0 .1rem .1rem;
        float:left;
        width: 30%;
        .button-city{
          padding: .1rem;
          box-sizing: border-box;
          text-align: center;
          margin: .1rem;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
      .city-list{
        .city-li{
          line-height: .76rem;
          padding-left: .2rem;
          border-bottom: .02rem solid #ccc;
        }
      }
    }
  }
</style>
