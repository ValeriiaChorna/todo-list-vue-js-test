<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          competed: false,
        };

        this.$emit("on-add-todo", newTodo);

        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 450px;
  padding: 10px 30px;
}
button {
  padding: 10px 30px;
}
</style>
