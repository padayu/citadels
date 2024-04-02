<template>
  <room-code-display class="code">{{ roomCode }}</room-code-display>
  <RoomPlayerList class="playerList" :players="playerList"/>
  <start-button v-if="isHost" class="start" @click="StartGame">НАЧАТЬ</start-button>
  <exit-button class="exit" @click="ExitRoom">ВЫХОД</exit-button>
  <ready-button v-if="!this.isReady" class="ready" @click="ToggleReady">ГОТОВ</ready-button>
  <not-ready-button v-if="this.isReady" class="ready" @click="ToggleReady">НЕ ГОТОВ</not-ready-button>
</template>

<script>
// @ is an alias to /src

import RoomPlayerList from "@/components/RoomPlayerList.vue";
import StartButton from "@/components/UI/StartButton.vue";
import RoomCodeDisplay from "@/components/RoomCodeDisplay.vue";
import ExitButton from "@/components/UI/ExitButton.vue";
import ReadyButton from "@/components/UI/ReadyButton.vue";
import NotReadyButton from "@/components/UI/NotReadyButton.vue";
import {mapState} from "vuex";
import router from "@/router";

export default {
  name: 'RoomView',
  components: {NotReadyButton, ReadyButton, ExitButton, RoomCodeDisplay, StartButton, RoomPlayerList},
  methods: {
    ToggleReady() {
      this.SendMessage({
        type: "lobby_member_update",
        payload: {"code": this.roomCode, "member": {"name": this.playerName, "ready": !this.isReady}},
      })
    },
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    ExitRoom() {
      this.SendMessage({
        type: "lobby_leave",
        payload: {"code": this.roomCode, "name": this.playerName}
      })
      router.push({name: "home"});
    },
    StartGame() {
      this.SendMessage({
        type: "lobby_start_game",
        payload: {"code": this.roomCode}
      })
    }
  },
  computed: {
    ...mapState({
      isHost: state => state.gameInfo.isHost,
      roomCode: state => state.gameInfo.roomCode,
      playerList: state => state.gameInfo.lobbyPlayerList,
      playerName: state => state.gameInfo.selfPlayerName,
    }),
    isReady() {
      try {
        return this.playerList.find(p => p.name === this.playerName).ready;
      }
      catch (e) {
        console.log("Player not found in playerList");
        return false;
      }
    }
  }
}
</script>

<style scoped src="./styles/RoomView.scss" lang="scss">
</style>