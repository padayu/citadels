<template>
  <button class="ready-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ReadyButton"
}
</script>

<style scoped>
.ready-button {
  width: 300px;
  height: 100px;
  color: black;
  background-color: rgb(86, 241, 73);
  border: rgb(22, 131, 26) solid 4px;
  padding: 10px;
  border-radius: 20px;
  font-size: 4em;
  font-family: "JetBrains Mono ExtraBold", monospace;
  cursor: pointer;
}
</style>