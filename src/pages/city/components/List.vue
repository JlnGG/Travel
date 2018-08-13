<template>
  <div class="list" ref="scroll">
    <div>
      <div class="area">
        <div class="city">当前城市</div>
        <div class="buttons-city">
          <div class="button-city">{{this.$store.state.city}}</div>
        </div>
      </div>
      <div class="area">
        <div class="city">热门城市</div>
        <div class="buttons-city" v-for="hotcity of hotCities" :key="hotcity.id">
          <div class="button-city" @click="changeHere(hotcity.name)">{{hotcity.name}}</div>
        </div>
      </div>
      <div class="area" v-for="(items , key ,index) of cities" :key="key" :ref="key">
        <div class="city">{{key}}</div>
        <div class="city-list">
          <ul class="city-ul" v-for="item of items" :key="item.id">
            <li class="city-li" @click="changeHere(item.name)">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BetterScroll(this.$refs.scroll)
  },
  methods: {
    changeHere (city) {
      this.$store.dispatch("changeCity",city)
      this.$router.push('/')
    }
  },
  props:{
    hotCities: Array,
    cities: Object,
    worlds: String,
    touchIndex: String
  },
  watch: {
    worlds () {
      if (this.worlds) {
        const ref = this.$refs[this.worlds][0]
        this.scroll.scrollToElement(ref)
      }
    },
    touchIndex () {
      if (this.touchIndex) {
        const ref = this.$refs[this.touchIndex][0]
        this.scroll.scrollToElement(ref)
      }
    }
  }
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
        line-height: .54rem;
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
