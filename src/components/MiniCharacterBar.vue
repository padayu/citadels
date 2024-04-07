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
  props: {
      targetable: Boolean,
  },
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    commitCharacterChoice(characterType) {
      if (this.targetable) {
        console.log(this.ability_pending);
        if (this.ability_pending) {
          this.SendMessage({
            "type": "game_target_ability",
            "payload": {
              "name": this.name,
              "code": this.code,
              "target_area": "character",
              "target_value": characterType,
            }
          });
        }
      }
      else {
        this.$emit('commitCharacterChoice', characterType);
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
.item {
  display: inline-block;
  margin-right: 5px;
}
</style>