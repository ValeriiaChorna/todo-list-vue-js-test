<template>
  <div class="list-item">
    <input type="checkbox" v-on:change="$emit('on-complete', todo.id)" />
    <p v-bind:class="{ done: todo.completed }">
      <span>{{ index + 1 }}.</span> {{ todo.title }}
    </p>
    <button v-on:click="$emit('on-remove', todo.id)">&times;</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  background-color: lightcyan;
  margin-bottom: 20px;
  padding: 5px 30px;
}

.done {
  text-decoration: line-through;
}
</style>
