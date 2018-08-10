<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back">&#xe6a5;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varstylus.styl'

  .header{
    position: relative;
    overflow: hidden;
    height: .86rem;
    line-height : .86rem;
    text-align: center;
    color: #fff;
    background-color $bgcolor;
    font-size: .32rem;
    .back{
      position: absolute;
      width: .64rem;
      text-align: center;
      font-size: .36rem;
      color: #fff;
    }
  }
</style>
