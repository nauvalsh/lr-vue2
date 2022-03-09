<template>
  <div id="app">
    <Header />
    <!-- view yang ada pada folder views -->
    <router-view/>
    <!-- buat demo vuex -->
    <Counter />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Counter from './components/layout/Counter.vue'

export default {
  components: {
    Header,
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
