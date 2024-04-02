<template>
  <div class="container">
      <mini-character-display v-for="character in this.characters" :is_active="character.card.active" :character="character"
                              :key="character.id" class="item" @characterClicked="commitCharacterChoice"/>
  </div>
</template>

<script>
import MiniCharacterDisplay from "@/components/MiniCharacterDisplay.vue";
import {mapState} from "vuex";

export default {
  name: "mini-character-bar",
  components: {MiniCharacterDisplay},
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    commitCharacterChoice(characterType) {
      this.SendMessage({
        type: "game_pick_character",
        payload: {
          "name": this.name,
          "code": this.code,
          "class": characterType,
        }
      });
      this.$store.commit('gameInfo/CloseCharacterChoice')
    }
  },
  computed: {
    ...mapState({
      name: state => state.gameInfo.selfPlayerName,
      code: state => state.gameInfo.roomCode,
      characters: state => state.gameInfo.gameState.Characters,
    }),
  }
}
</script>

<style scoped>
.item {
  display: inline-block;
  margin-right: 5px;
}
</style>