<template>
  <div class="BankTitle">Общий банк:</div>
  <div :class="{container: true, active: this.is_active}" @click="Interact">
    <img :src="require('@/assets/game_bank.png')" alt="broken" class="purse_image"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "GameBank",
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    Interact() {
      if (this.is_active) {
        this.SendMessage("game_bank_interact");
      }
    }
  },
  computed: {
    ...mapState({
      ws: state => state.websocket.ws,
      is_active: state => state.gameInfo.gameState.GameBankActive,
    }),
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 150px;
  height: 150px;
  border: rgb(28, 83, 55) solid 4px;
  border-radius: 20px;
  background-color: rgb(167, 220, 175);
  align-items: center;
}
.purse_image {
  width: 150px;
  height: 150px;
  margin: auto;
}
.BankTitle {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin: 5px;
  text-align: center;
}
.active {
  box-shadow: yellow 0 0 10px;
  cursor: pointer;
}
</style>