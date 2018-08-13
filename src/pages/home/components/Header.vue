<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe6a5;</div>
    </div>
    <div class="header-input">
      <span class="iconfont input-icon">&#xe633;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont city-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varstylus.styl'
  .header{
    height:.86rem;
    display :flex;
    background: $bgcolor;
    color: #fff;
    line-height: .86rem;
    .header-left{
      width: .64rem;
      float: left;
      .back-icon{
        text-align: center;
      }
    }
    .header-input{
      background: #fff;
      flex:1;
      margin-top: .12rem;
      margin-left: .2rem;
      height:.64rem;
      border-radius: .1rem;
      color: #ccc;
      line-height: .64rem;
      height: .64rem;
      .input-icon{
        padding-left: .2rem;
      }
    }
    .header-right{
      width: 1.24rem;
      float: right;
      text-align: center;
      color: #fff;
      .city-icon{
        font-size: .24rem;
      }
    }
  }
</style>
