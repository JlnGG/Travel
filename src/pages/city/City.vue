<template>
  <div>
    <City-header></City-header>
    <City-search :cities="cities"></City-search>
    <City-list :hotCities="this.hotCities" :cities="cities" :worlds="worlds" :touchIndex="touchIndex"></City-list>
    <city-words :citieys="cities" @clickList="clickList" @touchList="touchList"></city-words>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityWords from './components/Words'
import axios from 'axios'

export default {
  name: 'City',
  mounted () {
    this.cityInfo()
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      worlds: '',
      touchIndex: ''
    }
  },
  methods: {
    cityInfo () {
      axios.get('/api/city.json')
        .then(this.cityInfoget)
    },
    cityInfoget(res) {
      console.log(res)
      const data = res.data;
      const dataD = data.data;
      if(data.ret && dataD) {
        this.hotCities = dataD.hotCities;
        this.cities = dataD.cities
      }
    },
    clickList(res){
      this.worlds = res
    },
    touchList(res){
      this.touchIndex = res
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityWords
  }
}
</script>

<style>

</style>
