<template>
  <div>
    <h1>Todo page</h1>
    <router-link to="/">Home</router-link>

    <hr />

    <NewTodo @on-add-todo="onAddTodo" />

    <hr />
    <TodoList
      v-bind:todos="todos"
      v-on:on-complete-item="onCompleteItem"
      v-on:on-remove-item="onRemoveItem"
    />
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
import NewTodo from "../components/NewTodo";

export default {
  name: "HomePage",
  data() {
    return {
      todos: [
        // {id: 1, title: 'list item 1', completed: false},
        // {id: 2, title: 'list item 2', completed: false},
        // {id: 3, title: 'list item 3', completed: false},
      ],
    };
  },
  components: {
    TodoList,
    NewTodo,
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => (this.todos = json));
  },
  methods: {
    onCompleteItem(id) {
      this.todos = this.todos.map((item) => ({
        ...item,
        completed: item.id === id ? !item.completed : item.completed,
      }));
    },
    onRemoveItem(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    onAddTodo(todoObj) {
      this.todos.push(todoObj);
    },
  },
};
</script>
