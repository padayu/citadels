<template>
  <div :class="{miniCardImitator: true, active: this.card.active}" :style="{ backgroundColor: this.card.color, active: this.is_active}"
       @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel" @click="Interact"/>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MiniCardInCity",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    cardHoveredOver() {
      this.$store.dispatch('enlargedCard/enlargeCard', this.card);
    },
    cardHoverCancel() {
      this.$store.commit('enlargedCard/makeInvisible')
    },
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    Interact() {
      console.log("a");
      if (this.card.active) {
        console.log("b");
        if (this.ability_pending) {
          console.log("c");
          this.SendMessage({
            "type": "game_target_ability",
            "payload": {
              "name": this.name,
              "code": this.code,
              "target_area": "card",
              "target_value": this.card.id.toString(),
            }
          });
          this.$store.commit('enlargedCard/makeInvisible')
        }
        else {
          this.SendMessage("mini_card_interact, id= ", this.card.id);
        }
      }
    },
  },
  computed: {
    ...mapState({
      name: state => state.gameInfo.selfPlayerName,
      code: state => state.gameInfo.roomCode,
      ability_pending: state => state.gameInfo.gameState.AbilityPending,
      ws: state => state.websocket.ws,
    }),
  }
}
</script>

<style scoped>
.miniCardImitator {
  width: 26px;
  height: 39px;
  border: 3px solid black;
}
.active {
  box-shadow: -2px -2px yellow, -2px 2px yellow, 2px -2px yellow, 2px 2px yellow;
  cursor: pointer;
}
</style>