<template>
  <div class="deck">
    <img src="@/assets/cardback.png" alt="broken" class="deckImage c1"/>
    <img src="@/assets/cardback.png" alt="broken" class="deckImage c2"/>
    <img src="@/assets/cardback.png" alt="broken" :class="{deckImage: true, c3: true, active: this.is_active}"
         @click="Interact"/>
    <div class="deckSize">{{ this.deck_size }}</div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Deck",
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    Interact() {
      if (this.is_active) {
        this.SendMessage("deck_interact");
      }
    }
  },
  computed: {
    ...mapState({
      ws: state => state.websocket.ws,
      deck_size: state => state.gameInfo.gameState.DeckSize,
      is_active: state => state.gameInfo.gameState.DeckActive,
    }),
  }
}
</script>

<style scoped>
.deckImage {
  width: 60px;
  height: 90px;
}
.deck {
  width: 80px;
  height: 150px;
}
.c1 {
  position: absolute;
  left: 5px;
  top: 5px;
}
.c2 {
  position: absolute;
  left: 10px;
  top: 10px;
}
.c3 {
  position: absolute;
  left: 15px;
  top: 15px;
}
.deckSize {
  position: absolute;
  text-align: center;
  left: 30px;
  bottom: 10px;
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
.active {
  box-shadow: yellow 0 0 10px;
  cursor: pointer;
}
</style>