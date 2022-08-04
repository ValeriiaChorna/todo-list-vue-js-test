<template>
  <div class="todo-list">
    <h2>List</h2>
    <div>
      <TodoItem
        v-for="(todo, idx) of todos"
        v-bind:todo="todo"
        v-bind:index="idx"
        :key="todo.id"
        @on-complete="onCompleteItem"
        @on-remove="onRemoveItem"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    onCompleteItem(id) {
      this.$emit("on-complete-item", id);
    },
    onRemoveItem(id) {
      this.$emit("on-remove-item", id);
    },
  },
};
</script>

<style scoped>
.todo-list {
  width: 600px;
  margin: 0 auto;
}
</style>
