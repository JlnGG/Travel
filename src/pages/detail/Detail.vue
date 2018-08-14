<template>
<div>
  <detail-banner :bannerImg="bannerImg" :sightName="sightName" :categoryList="categoryList"></detail-banner>
</div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      categoryList: ''
    }
  },
  mounted() {
    this.imginfo()
  },
  methods: {
    imginfo () {
      axios.get('/api/detail.json')
        .then (this.imginfoSucc)
    },
    imginfoSucc (res) {
      console.log(res)
      const data = res.data;
      const detail = data.data;
      if (data.ret) {
        this.bannerImg = detail.bannerImg;
        this.sightName = detail.sightName;
        this.categoryList = detail.categoryList;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
