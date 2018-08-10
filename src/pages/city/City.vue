<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
    <City-list></City-list>
    <city-words></city-words>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityWords from './components/Words'

export default {
  name: 'City',
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
