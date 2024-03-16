<template>
  <button class="exitButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ExitButton"
}
</script>

<style scoped>
.exitButton {
  width: 160px;
  color: black;
  background-color: rgb(255, 77, 77);
  border: rgb(238, 0, 6) solid 4px;
  padding: 10px;
  border-radius: 20px;
  font-size: 2.5em;
  font-family: "JetBrains Mono ExtraBold", monospace;
}
</style>