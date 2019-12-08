<template>
  <div id="app">
    <Header/>
    <Menus/>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Menus from '@/components/Menus.vue'
export default {
  components: {
    Header,
    Menus,
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
}
</style>
