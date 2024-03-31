<template>
  <div class="container">
    <div class="cityTitle">Ваш город:</div>
    <div>
      <TransitionGroup name="City">
        <medium-card v-for="card in this.city" :active="true" :card="card" :key="card.id" class="item"
        @cardClicked="cardClickedMessage"/>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import MediumCard from "@/components/MediumCard.vue";
import {mapState} from "vuex";

export default {
  name: "SelfCity",
  components: {MediumCard},
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    cardClickedMessage(cardId) {
      this.SendMessage("self_city_card_clicked " + cardId);
    },
  },
  computed: {
    ...mapState({
      city: state => state.gameInfo.gameState.Player.City,
    }),
  }
}
</script>

<style scoped>
.container {
  width: 700px;
  height: 190px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}
.cityTitle {
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
.item {
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
</style>