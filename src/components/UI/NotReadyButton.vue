<template>
  <button class="not-ready-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "NotReadyButton"
}
</script>

<style scoped>
.not-ready-button {
  width: 300px;
  height: 100px;
  color: black;
  background-color: rgb(241, 86, 73);
  border: rgb(131, 22, 26) solid 4px;
  padding: 10px;
  border-radius: 20px;
  font-size: 3em;
  font-family: "JetBrains Mono ExtraBold", monospace;
  cursor: pointer;
}
</style>