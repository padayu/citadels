<template>
  <button class="startButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "StartButton"
}
</script>

<style scoped>
.startButton {
  width: 300px;
  color: black;
  background-color: rgb(86, 241, 73);
  border: rgb(22, 131, 26) solid 4px;
  padding: 10px;
  border-radius: 20px;
  font-size: 4em;
  font-family: "JetBrains Mono ExtraBold", monospace;
}
</style>