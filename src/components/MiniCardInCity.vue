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
      if (this.is_active) {
        this.SendMessage("mini_card_interact, id= ", this.card.id);
      }
    },
  },
  computed: {
    ...mapState({
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