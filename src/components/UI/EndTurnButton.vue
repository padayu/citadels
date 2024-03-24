<template>
  <button class="end_turn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "EndTurnButton"
}
</script>

<style scoped>
  .end_turn {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    color: black;
    font-size: 1.3em;
    font-family: "JetBrains Mono ExtraBold", monospace;
    background-color: rgb(238, 220, 2);
    border: rgb(236, 149, 4) solid 4px;
  }
</style>