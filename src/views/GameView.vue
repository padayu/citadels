<template>
  <end-turn-button class="end-turn">КОНЕЦ ХОДА</end-turn-button>
  <exit-button class="exit">ВЫХОД</exit-button>
  <div class="self-city">
    <self-city/>
  </div>
  <div class="hand">
    <hand-display/>
  </div>
  <div class="player-bank">
    <player-bank></player-bank>
  </div>
  <div class="game-bank">
    <game-bank/>
  </div>
  <self-character-display
      :active="this.self_character_active"
      :character="this.self_character"
      class="self-player-display"
  />
  <deck class="deck"/>
  <enlarged-card-view class="enlarged-card" :card="getEnlargedCard" :show="getVisible"/>
  <game-player-list class="game-player-list"/>
  <mini-character-bar class="mini-character-bar"></mini-character-bar>
  <game-log class="game-log"></game-log>
  <card-choice-window v-if="showCardChoice"></card-choice-window>
  <character-choice-window v-if="showCharacterChoice"></character-choice-window>
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
import MiniCharacterBar from "@/components/MiniCharacterBar.vue";
import CardChoiceWindow from "@/components/CardChoiceWindow.vue";
import CharacterChoiceWindow from "@/components/CharacterChoiceWindow.vue";
import GameLog from "@/components/GameLog.vue";

export default {
  name: 'GameView',
  components: {
    GameLog,
    CharacterChoiceWindow,
    CardChoiceWindow,
    MiniCharacterBar,
    GamePlayerList,
    EnlargedCardView,
    GameBank, SelfCity, Deck, SelfCharacterDisplay, PlayerBank, ExitButton, EndTurnButton, HandDisplay},
  data() {
    return {
      self_character_active: true,
      self_character: {
        name: "Король",
        ability_description: "Получает 1 монету за каждый дворянский квартал в вашем городе.",
      },
    }
  },
  computed: {
    ...mapState({
      placeholder: state => state.enlargedCard.placeholder,
      enlargedCard: state => state.enlargedCard.enlargedCard,
      showCardChoice: state => state.gameInfo.showCardChoice,
      showCharacterChoice: state => state.gameInfo.showCharacterChoice,
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