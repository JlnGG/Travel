<template>
  <ul class="ul" >
    <li class="li" v-for="(items , key ,index) of citieys" :key="index"><a href="#A">{{key}}</a></li>
  </ul>
</template>

<script>
export default {
  name: 'CityWords',
  props: {
    citieys: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varstylus.styl'

  .ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .li{
      line-height: .44rem;
      text-align: center;
      color: $bgcolor;
    }
  }
</style>
