<template>
  <ul class="ul" >
    <li class="li" v-for="item of cities" :key="item" :ref="item" @click="handClick"  @touchstart="handTouchStart" @touchmove="handTouchMove" @touchend="handTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityWords',
  data () {
    return {
      touchStart : false
    }
  },
  props: {
    citieys: Object
  },
  methods: {
    handClick (e) {
      const clienY = e.target.innerHTML
      this.$emit("clickList",clienY)
    },
    handTouchStart () {
      this.touchStart = true
    },
    handTouchMove (e) {
      const startY = this.$refs['A'][0].offsetTop
      const touchY = e.touches[0].clientY -74
      const index = Math.floor (( touchY - startY ) / 22 )
      if ( index >= 0 && index < this.cities.length) {
        const city = this.cities[index]
        this.$emit ("touchList" , city)
      }
    },
    handTouchEnd () {
      this.touchStart = false
    }
  },
  computed: {
    cities () {
      const cities = []
      for ( let c in this.citieys ) {
        cities.push(c)
      }
      return cities
    }
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
