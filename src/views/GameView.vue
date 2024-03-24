<template>
  <end-turn-button class="endTurn">КОНЕЦ ХОДА</end-turn-button>
  <exit-button class="exit">ВЫХОД</exit-button>
  <div class="selfCity">
    <self-city/>
  </div>
  <div class="hand">
    <hand-display/>
  </div>
  <div class="playerBank">
    <player-bank></player-bank>
  </div>
  <div class="gameBank">
    <game-bank/>
  </div>
  <self-character-display
      :active="this.self_character_active"
      :character="this.self_character"
      class="selfPlayerDisplay"
  />
  <deck :deck_size="this.deck_size" class="deck"/>
  <enlarged-card-view class="enlargedCard" :card="getEnlargedCard" :show="getVisible"/>
  <game-player-list :players="players" class="gamePlayerList"/>
</template>

<script>
// @ is an alias to /src

import HandDisplay from "@/components/HandDisplay.vue";
import EndTurnButton from "@/components/UI/EndTurnButton.vue";
import ExitButton from "@/components/UI/ExitButton.vue";
import PlayerBank from "@/components/PlayerBank.vue";
import SelfCharacterDisplay from "@/components/SelfCharacterDisplay.vue";
import Deck from "@/components/Deck.vue";
import SelfCity from "@/components/SelfCity.vue";
import GameBank from "@/components/GameBank.vue";
import EnlargedCardView from "@/components/EnlargedCardView.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import GamePlayerList from "@/components/GamePlayerList.vue";

export default {
  name: 'GameView',
  components: {
    GamePlayerList,
    EnlargedCardView,
    GameBank, SelfCity, Deck, SelfCharacterDisplay, PlayerBank, ExitButton, EndTurnButton, HandDisplay},
  data() {
    return {
      self_character_active: true,
      deck_size: 10,
      self_character: {
        name: "Король",
        ability_description: "Получает 1 монету за каждый дворянский квартал в вашем городе.",
      },
      players: [
        {
          name: "Игрок 1",
          character: {
            name: "Король",
            image: "King.png",
            ability_description: "Получает 1 монету за каждый дворянский квартал в вашем городе."
          },
          money: 10,
          hand_size: 5,
          city: [
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
            {name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"},
            {name: 'card5', id: 5, image: "gru5.png", description: "This is a green card", color: "green"},
            {name: 'card6', id: 6, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card7', id: 7, image: "gru2.png", description: "This is a red card", color: "red"},
          ],
        },
        {
          name: "Игрок 2",
          character: {
            name: "Чародей",
            image: "Enchanter.png",
            ability_description: "Чарует там все дела"
          },
          money: 10,
          hand_size: 20,
          city: [
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
            {name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"}
          ]
        },
        {
          name: "Игрок 3",
          character: {
            name: "Чародей",
            image: "Enchanter.png",
            ability_description: "Чарует там все дела"
          },
          money: 10,
          hand_size: 20,
          city: [
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
            {name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"}
          ]
        },
        {
          name: "Игрок 4",
          character: {
            name: "Чародей",
            image: "Enchanter.png",
            ability_description: "Чарует там все дела"
          },
          money: 10,
          hand_size: 20,
          city: [
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
            {name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"}
          ]
        },
        {
          name: "Игрок 5",
          character: {
            name: "Чародей",
            image: "Enchanter.png",
            ability_description: "Чарует там все дела"
          },
          money: 10,
          hand_size: 20,
          city: [
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
            {name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"}
          ]
        },
        {
          name: "Игрок 6",
          character: {
            name: "Чародей",
            image: "Enchanter.png",
            ability_description: "Чарует там все дела"
          },
          money: 10,
          hand_size: 20,
          city: [
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
            {name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"}
          ]
        },
        {
          name: "Игрок 7",
          character: {
            name: "Чародей",
            image: "Enchanter.png",
            ability_description: "Чарует там все дела"
          },
          money: 10,
          hand_size: 20,
          city: [
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
            {name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"},
            {name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
            {name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
            {name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState({
      placeholder: state => state.enlargedCard.placeholder,
      enlargedCard: state => state.enlargedCard.enlargedCard,
    }),
    ...mapGetters({
      getEnlargedCard: "enlargedCard/getEnlargedCard",
      getPlaceholder: "enlargedCard/getPlaceholder",
      getVisible: "enlargedCard/getVisible",
    }),
    ...mapMutations({
      setEnlargedCard: "enlargedCard/setEnlargedCard",
      resetEnlargedCard: "enlargedCard/resetEnlargedCard",
      makeVisible: "enlargedCard/makeVisible",
      makeInvisible: "enlargedCard/makeInvisible",
    }),
  }
}
</script>

<style scoped src="./styles/GameView.scss" lang="scss">
</style>