<template>
  <div class="city-search">
    <input type="text" class="search" placeholder="输入城市或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varstylus.styl'

  .city-search{
    height: .72rem;
    padding: 0 .1rem;
    background-color: $bgcolor;
    .search{
      width: 100%;
      height: .62rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .06rem;
    }
  }
</style>
