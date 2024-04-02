<template>
  <button :class="{abilityButton: true, active: this.is_active}" @click="ActivaleAbility">
    <slot></slot>
  </button>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "AbilityButton",
  props: {
    ability: {
      type: Object,
      required: true,
    },
  },
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    ActivaleAbility() {
      this.SendMessage({
        type: "game_activate_ability",
        payload: {
          "name": this.name,
          "code": this.code,
          "ability_key": this.ability.key,
        }
      });
    }
  },
  computed: {
    ...mapState({
      name: state => state.gameInfo.selfPlayerName,
      code: state => state.gameInfo.roomCode,
    }),
  }
}
</script>

<style scoped>
  .abilityButton {
    width: 110px;
    height: 55px;
    color: black;
    font-size: 1em;
    font-family: "JetBrains Mono ExtraBold", monospace;
    background-color: rgb(238, 220, 2);
    border: rgb(236, 149, 4) solid 4px;
    cursor: pointer;
    margin: 5px;
    border-radius: 10px;
  }
  .active {
    box-shadow: yellow 0 0 40px;
  }
</style>