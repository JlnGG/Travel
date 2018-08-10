<template>
  <ul class="ul">
    <li class="li"><a href="#A">A</a></li>
    <li class="li"><a href="#B">B</a></li>
    <li class="li"><a href="#C">C</a></li>
    <li class="li"><a href="#D">D</a></li>
    <li class="li"><a href="#E">E</a></li>
    <li class="li"><a href="#F">F</a></li>
    <li class="li"><a href="#G">G</a></li>
    <li class="li"><a href="#H">H</a></li>
    <li class="li"><a href="#I">I</a></li>
    <li class="li"><a href="#G">J</a></li>
  </ul>
</template>

<script>
export default {
  name: 'CityWords'
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
