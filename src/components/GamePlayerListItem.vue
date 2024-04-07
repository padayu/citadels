<template>
  <div class="player">
    <div :class="{playerName: true, active: this.displayedPlayer.active}" @click="NameClicked">
      {{ this.displayedPlayer.name }}
    </div>
    <div class="info">
      <mini-character-display :character="{'card': this.defaultCharacter()}" :is_active="this.defaultCharacter().active"
                              class="miniCharacterDisplay" :has_crown="this.displayedPlayer.crown"/>
      <img class="miniCoinImage" src="@/assets/coin.png" alt="broken"/>
      <div class="playerMoney">{{ this.displayedPlayer.bank }}</div>
      <img class="miniCardImage" src="@/assets/cardback.png" alt="broken"/>
      <div class="playerHandSize">{{ this.displayedPlayer.hand_deck_size }}</div>
      <TransitionGroup name="City" class="container">
        <mini-card-in-city v-for="card in this.displayedPlayer.town" :card="card" :key="card.id" class="item"/>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import MiniCardInCity from "@/components/MiniCardInCity.vue";
import MediumCard from "@/components/MediumCard.vue";
import MiniCharacterDisplay from "@/components/MiniCharacterDisplay.vue";
import {mapState} from "vuex";

export default {
  name: "GamePlayerListItem",
  components: {MiniCharacterDisplay, MediumCard, MiniCardInCity},
  props: {
    displayedPlayer: {
      type: Object,
      required: true,
    }
  },
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    defaultCharacter() {
      if (this.displayedPlayer.characters.length === 0) {
        return {
          name: "Неизвестный персонаж",
          ability_description: "Персонаж этого игрока пока не раскрыт!",
          image: "",
          is_robbed: false,
          active: false,
        }
      }
      return this.displayedPlayer.characters[0];
    },
    NameClicked() {
      if (this.displayedPlayer.active) {
        this.SendMessage({
          "type": "game_target_ability",
          "payload": {
            "name": this.name,
            "code": this.code,
            "target_area": "player",
            "target_value": this.displayedPlayer.name,
          }
        });
      }
    }
  },
  computed: {
    ...mapState({
      name: state => state.gameInfo.selfPlayerName,
      code: state => state.gameInfo.roomCode,
      characters: state => state.gameInfo.gameState.Characters,
      ability_pending: state => state.gameInfo.gameState.AbilityPending,
    }),
  }
}
</script>

<style scoped>
.player {
  width: 440px;
  height: 80px;
  border: black 3px solid;
  border-radius: 20px;
  padding: 10px;
  background-color: rgba(20, 100, 200, 1);
  margin-bottom: 10px;
}
.playerName {
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin-bottom: 10px;
  cursor: pointer;
}
.info {
  display: flex;
  align-items: center;
}
.miniCharacterDisplay {
  width: 30px;
  height: 45px;
  display: inline-block;
  margin-right: 5px;
}
.miniCardImage {
  width: 30px;
  height: 45px;
  display: inline-block;
  margin-right: 5px;
}
.miniCoinImage {
  width: 45px;
  height: 45px;
  display: inline-block;
  margin-right: 5px;
}
.playerMoney {
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin-right: 5px;
}
.playerHandSize {
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin-right: 5px;
}
.container {
  display: flex;
}
.item {
  margin-right: 5px;
}
.active {
  color: green;
}
</style>