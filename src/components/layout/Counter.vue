<template>
  <div>
    <!-- trigger a state change with the store.commit method -->
    <button @click="$store.commit('decrement')">-</button>
    <!-- access store $store.state.nama_module.nama_state -->
    <strong> {{ $store.state.counter.counter }}</strong>
    <button @click="$store.commit('increment')">+</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>