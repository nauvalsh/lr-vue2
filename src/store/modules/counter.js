// initial state
const state = () => ({counter: 0})

// https://vuex.vuejs.org/guide/mutations.html
// The only way to actually change state in a Vuex store is by committing a mutation
const mutations = {
  increment(state) {
    state.counter ++;
  },
  decrement(state){
    state.counter--;
  }
}

// export for consume in store
export default {
  state,
  mutations
}