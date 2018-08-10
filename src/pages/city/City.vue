<template>
  <div>
    <City-header></City-header>
    <City-search></City-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style>

</style>
