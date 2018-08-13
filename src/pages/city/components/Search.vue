<template>
  <div class="city-search">
    <div>
      <input type="text" class="search" placeholder="输入城市或拼音" v-model="message">
    </div>
    <div class="search-list" ref="search" v-show="message.length">
      <ul>
        <li class= "search-item" v-for="item of lists" :key="item.id">{{item.name}}</li>
        <li v-show="!lists.length" class= "search-item">没有相对应的匹配结果</li>
      </ul>
    </div>
  </div>
</template>

<script>

import BetterScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data () {
    return {
      message: '',
      lists: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    message() {
      if ( this.timer ) {
        clearTimeout(this.timer)
      }
      if ( !this.message ) {
        this.lists = []
        return 
      }
      const _this = this
      this.timer = setTimeout(function() {
        const list = []
        for ( let v in _this.cities ) {
          _this.cities[v].forEach( (ref) => {
            if (  ref.spell.indexOf ( _this.message ) > -1 || ref.name.indexOf ( _this.message ) > -1 ) {
              list.push (ref)
            }
          })
        }
        _this.lists = list
        console.log(_this.lists)
      }, 14);
    }
  },
  mounted () {
    this.scroll = new BetterScroll (this.$refs.search)
  },

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
    .search-list{
      position: absolute;
      top: 1.58rem;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      z-index: 1;
      overflow: hidden;
      .search-item{
        line-height: .62rem;
        padding-left: .2rem;
        color: #666;
        background-color: #fff;
        border-bottom: .02rem solid #ccc;
      }
    }
  }
</style>
