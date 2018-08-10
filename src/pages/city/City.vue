<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
    <City-list></City-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style>

</style>
