<template>
  <div class="player">
    <div class="playerName">{{ this.displayedPlayer.name }}</div>
    <div class="info">
      <mini-character-display :character="{'card': this.defaultCharacter()}" :is_active="this.displayedPlayer.characters_active[0]"
                              class="miniCharacterDisplay" :has_crown="this.displayedPlayer.crown"/>
      <img class="miniCoinImage" src="@/assets/coin.png" alt="broken"/>
      <div class="playerMoney">{{ this.displayedPlayer.coins }}</div>
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
    defaultCharacter() {
      if (this.displayedPlayer.characters.length === 0) {
        return {
          name: "Неизвестный персонаж",
          ability_description: "Персонаж этого игрока пока не раскрыт!",
          image: "",
          is_robbed: false,
        }
      }
      return this.displayedPlayer.characters[0];
    }
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
</style>