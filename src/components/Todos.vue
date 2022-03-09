<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <!-- :todo sama dengan v-bind:todo -->
      <!-- v-on:del-todo Emit event ke parent component -->
      <TodoItem :todo="todo" v-on:del-todo="$emit('del-todo', todo.id, 'Hellow Nauval!')" />
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'

export default {
  name: "Todos",
  props: {
    todos: Array
  },
  components: {
    TodoItem
  },
  created(){

  }
}
</script>

<style>

</style>