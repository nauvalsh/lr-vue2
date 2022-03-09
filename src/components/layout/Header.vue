<template>
  <header class="header">
    <h1>Todo List</h1>
    <div id="nav">
      <!-- sebenernya vue router sudah class active, ini hanya untuk contoh penggunaan computed
      https://stackoverflow.com/questions/46083220/how-to-vuejs-router-link-active-style -->
      <router-link :class="{'active': !path ? true : false}" to="/">Home</router-link> |
      <router-link :class="{'active': path == 'about' ? true : false}" to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    computed: {
      path(){
        // computed properties are cached based on their reactive dependencies
        // https://v2.vuejs.org/v2/guide/computed.html?redirect=true
        return this.$route.path.slice(1)
      }
    }
  }
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }

  .active {
    color: greenyellow !important;
  }
</style>