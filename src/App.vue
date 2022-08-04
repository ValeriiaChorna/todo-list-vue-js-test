<template>
  <div class="app">
  <img alt="Vue logo" src="./assets/logo.png" />

  <hr />

  <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 0;
  background-color: aliceblue;
  min-height: 1000px;
}
</style>
