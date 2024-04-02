<template>
  <div class="bg">
  <div class="dialog">
    <h2 class="header">Выберите карту</h2>
    <div class="card-container">
      <medium-card v-for="card in cards" :card="card" :key="card.id" class="card" @cardClicked="CommitChoice"/>
    </div>
  </div>
  </div>
</template>

<script>
import MediumCard from "@/components/MediumCard.vue";
import {mapState} from "vuex";

export default {
  name: "CardChoiceWindow",
  components: {MediumCard},
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    CommitChoice(cardId) {
      this.SendMessage({
        "type": "game_choose_card",
        "payload": {
          "name": this.name,
          "code": this.code,
          "id": cardId,
        }
      });
      this.$store.commit('gameInfo/CloseCardChoice');
    }
  },
  computed: {
    ...mapState({
      name: state => state.gameInfo.selfPlayerName,
      code: state => state.gameInfo.roomCode,
      cards: state => state.gameInfo.cardOptions,
    }),
  }
}
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.card-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 40%;
}
.dialog {
  position: relative;
  display: flex;
  width: 300px;
  height: 300px;
  border: black 3px solid;
  border-radius: 20px;
  padding: 10px;
  background-color: rgba(40, 150, 180, 1);
}
.header {
  position: absolute;
  top: 0;
  width: 100%;
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.5em;
  color: yellow;
  text-align: center;
  text-shadow: 2px 0 0 black, -2px 0 0 black, 0 -2px 0 black, 0 2px 0 black;
}
.card {
  display: inline-block;
  margin: 4px;
}
</style>