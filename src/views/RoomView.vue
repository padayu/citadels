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

<style scoped src="./styles/RoomView.scss" lang="scss">
</style>