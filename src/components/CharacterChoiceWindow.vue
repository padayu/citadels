<template>
  <div class="bg">
  <div class="character-choice-window">
    <div class="character-choice-window-header">
      <h2>Выберите персонажа</h2>
    </div>
    <mini-character-bar class="characters" @commitCharacterChoice="CharacterChosen"></mini-character-bar>
  </div>
  </div>
</template>

<script>
import MiniCharacterDisplay from "@/components/MiniCharacterDisplay.vue";
import {mapState} from "vuex";
import MiniCharacterBar from "@/components/MiniCharacterBar.vue";

export default {
  name: "CharacterChoiceWindow",
  components: {MiniCharacterBar, MiniCharacterDisplay},
  methods: {
     SendMessage(message) {
       this.$store.dispatch('websocket/sendMessage', message)
     },
      CharacterChosen(characterType) {
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
.character-choice-window {
  position: relative;
  display: flex;
  width: 500px;
  height: 300px;
  border: black 3px solid;
  border-radius: 20px;
  padding: 10px;
  background-color: rgba(40, 150, 180, 1);
}
.character-choice-window-header {
  position: absolute;
  top: 0;
  width: 100%;
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.5em;
  color: yellow;
  text-align: center;
  text-shadow: 2px 0 0 black, -2px 0 0 black, 0 -2px 0 black, 0 2px 0 black;
}
.characters {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>