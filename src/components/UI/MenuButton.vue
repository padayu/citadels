<template>
    <button class="menuButton">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "MenuButton"
}
</script>

<style scoped>
.menuButton {
  width: 330px;
  color: black;
  background-color: rgb(238, 220, 2);
  border: rgb(236, 149, 4) solid 4px;
  padding: 10px;
  border-radius: 20px;
  font-size: 2em;
  font-family: "JetBrains Mono ExtraBold", monospace;
}
</style>