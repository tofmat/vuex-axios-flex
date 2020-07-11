<template>
  <div id="app">
    <div class="container">
      <addTodo />
      <filterTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import addTodo from './components/addTodo.vue'
import filterTodo from './components/filterTodo.vue'

export default {
  name: 'App',
  components: {
    Todos,
    addTodo,
    filterTodo
  }
}
</script>

<style>
body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 100%;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
