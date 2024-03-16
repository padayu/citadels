<template>
  <room-code-display class="code">AMOGUS</room-code-display>
  <RoomPlayerList class="playerList"/>
  <start-button class="start">НАЧАТЬ</start-button>
  <exit-button class="exit">ВЫХОД</exit-button>
</template>

<script>
// @ is an alias to /src

import RoomPlayerList from "@/components/RoomPlayerList.vue";
import StartButton from "@/components/UI/StartButton.vue";
import RoomCodeDisplay from "@/components/RoomCodeDisplay.vue";
import ExitButton from "@/components/UI/ExitButton.vue";

export default {
  name: 'RoomView',
  components: {ExitButton, RoomCodeDisplay, StartButton, RoomPlayerList},
}
</script>

<style scoped>
.code {
  position: absolute;
  top: 20px;
  right: 200px;
}
.start {
  position: absolute;
  bottom: 400px;
  right: 280px;
}
.exit {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
</style>