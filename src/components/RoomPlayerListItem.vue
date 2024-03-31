<template>
  <div class="player"
       :style="{textShadow: `
       1px 0 ${playerColors[displayedPlayer.id % playerColors.length]},
       0 1px ${playerColors[displayedPlayer.id % playerColors.length]},
       1px 0 ${playerColors[displayedPlayer.id % playerColors.length]},
       0 -1px ${playerColors[displayedPlayer.id % playerColors.length]}`}">
    {{ displayedPlayer.name }}
    <img class="ready" v-if="displayedPlayer.ready" :src="require('@/assets/ready_icon.png')">
    <button v-if="isHost && notSelf" class="kick" @click="Kick">Кикнуть</button>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'RoomPlayerListItem',
  props: {
    displayedPlayer: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      playerColors: [
        'rgb(77, 77, 255)',
        'rgb(255, 150, 100)',
        'rgb(77, 255, 77)',
        'rgb(77, 255, 255)',
        'rgb(255, 77, 255)',
        'rgb(255, 0, 0)',
        'rgb(255, 255, 0)',
        'rgb(170, 0, 255)',
        'rgb(150, 77, 77)',
        'rgb(255, 255, 255)'
      ],
    }
  },
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    Kick() {
      this.SendMessage({
        type: "lobby_kick",
        payload: {"code": this.roomCode, "name": this.displayedPlayer.name}
      })
    }
  },
  computed: {
    ...mapState({
      isHost: state => state.gameInfo.isHost,
      roomCode: state => state.gameInfo.roomCode,
      playerName: state => state.gameInfo.selfPlayerName,
    }),
    notSelf() {
      return this.displayedPlayer.name !== this.playerName;
    },
  }
}
</script>

<style scoped>
.player {
  display: flex;
  height: 45px;
  margin: 10px;
  border: solid rgb(0, 0, 0) 2px;
  padding: 5px;
  font-size: 2em;
  font-family: "JetBrains Mono ExtraBold", monospace;
  align-items: center;
}
.kick {
  color: black;
  background-color: rgb(255, 77, 77);
  border: rgb(238, 0, 6) solid 4px;
  padding: 3px;
  border-radius: 10px;
  font-size: 0.8em;
  font-family: "JetBrains Mono ExtraBold", monospace;
  cursor: pointer;
  position: absolute;
  right: 10px;
  margin-right: 10px;
}
.ready {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
