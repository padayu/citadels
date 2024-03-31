<template>
  <button :class="{end_turn: true, active: is_active}">
    <slot></slot>
  </button>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "EndTurnButton",
  computed: {
    ...mapState({
      is_active: state => state.gameInfo.gameState.EndTurnActive,
    }),
  }
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
    cursor: pointer;
  }
  .active {
    box-shadow: yellow 0 0 40px;
  }
</style>