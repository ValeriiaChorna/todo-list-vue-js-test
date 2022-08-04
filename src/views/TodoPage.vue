<template>
  <div>
    <h1>Todo page</h1>
    <router-link to="/">Home</router-link>

    <hr />

    <NewTodo @on-add-todo="onAddTodo" />

    <select v-model="filterString">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>

    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      v-on:on-complete-item="onCompleteItem"
      v-on:on-remove-item="onRemoveItem"
    />
    <p v-else>No todo found</p>
  </div>
</template>

<script>
import Loader from "../components/Loader";
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
      loading: true,
      filterString: "all",
    };
  },
  components: {
    TodoList,
    NewTodo,
    Loader,
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  computed: {
    filteredTodos() {
      if (this.filterString === "all") {
        return this.todos;
      }
      if (this.filterString === "completed") {
        return this.todos.filter((item) => item.completed);
      }
      if (this.filterString === "not-completed") {
        return this.todos.filter((item) => !item.completed);
      }
      return []
    },
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
