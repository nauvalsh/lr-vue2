<template>
  <div id="app">
    <!-- @add-todo sama dengan v-on:add-todo -->
    <!-- @add-todo menerima data berupa array dari Todos.vue [{object_todo_baru}]-->
    <AddTodo v-on:add-todo="addTodo" />
    <!-- @del-todo sama dengan v-on:del-todo -->
    <!-- @del-todo menerima data berupa array dari Todos.vue [todo_id, 'Hellow Nauval!'] -->
    <Todos v-bind:todos="todos" @del-todo="deleteItem" />
  </div>
</template>

<script>
import Todos from '../components/Todos.vue'
import AddTodo from '../components/AddTodo.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  },
  data(){
    return {
      todos: []
    }
  },
  methods: {
    deleteItem(id, greet){
      // deleteItem menerima 2 parameter
      // karena @del-todo mendapat event emit berupa array dari Todos.vue [todo_id, 'Hellow Nauval!']
      console.log(greet);

      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() => {
        this.todos = this.todos.filter(el => el.id != id);
      }).catch(err => console.log(err));
      
    },
    addTodo(newTodo){
      const {title,completed} = newTodo;

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      }).then(res => {
        this.todos = [...this.todos, res.data];
      }).catch(err => console.log(err));
      
    }
  },
  created(){
    // created is similar to componentDidMount in react
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err))
  }
}
</script>

<style>

</style>
