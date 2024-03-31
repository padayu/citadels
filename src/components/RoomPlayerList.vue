<template>
  <div class="container">
    <div class="centered list_header">Cписок игроков:</div>
    <div class="actual_list">
      <custom-scrollbar :style="{ width: '690px', height: '540px' }" v-if="players.length > 0">
        <TransitionGroup name="roomPlayerList">
          <room-player-list-item
              v-for="player in players"
              :displayedPlayer="player"
              :key="player.id"
          />
        </TransitionGroup>
      </custom-scrollbar>
      <div v-else>
        <h1 style="color: red">There are no players in this room</h1>
      </div>
    </div>
  </div>
</template>

<script>
import RoomPlayerListItem from "@/components/RoomPlayerListItem.vue";
import {mapMutations, mapState} from "vuex";

export default {
  name: "roomPlayerList",
  components: {RoomPlayerListItem},
  props: {
    players: {
      type: Array,
    }
  },
}
</script>

<style scoped>
.list_header {
  padding: 3px;
  font-size: 2em;
  font-family: 'Cinzel Decorative', cursive;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  border: rgb(28, 83, 55) solid 4px;
  border-radius: 20px;
  background-color: rgb(167, 220, 175);
}
.container {
  width: 700px;
  margin: 15px;
}
.actual_list {
  overflow-y: auto;
  height: 550px;
  margin-top: -4px;
  border: rgb(28, 83, 55) solid 4px;
  border-radius: 20px;
  background-color: rgb(167, 220, 175);
}
::-webkit-scrollbar-track {
  background: #ffffff;
}
</style>