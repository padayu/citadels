<template>
  <div class="container">
    <div class="centered list_header">Cписок игроков:</div>
    <div class="actual_list">
      <custom-scrollbar :style="{ width: '690px', height: '540px' }" v-if="players.length > 0">
        <TransitionGroup name="roomPlayerList">
          <room-player-list-item
              v-for="player in players"
              :player="player"
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

export default {
  name: "room-player-list",
  components: {RoomPlayerListItem},
  props: {
    players: {
      type: Array,
    }
  },
  data() {
    return {
      players: [
        { id: 1, name: "nasos" },
        { id: 2, name: "treugolnik" },
        { id: 3, name: "zhopa" },
        { id: 4, name: "Ivan" },
        { id: 5, name: "Petr" },
        { id: 6, name: "Vasya" },
        { id: 7, name: "Kolya" },
        { id: 8, name: "Pablo" },
        { id: 9, name: "Escobar" },
        { id: 10, name: "Pablo Escobar" },
        { id: 11, name: "Pablo Escobar" },
        { id: 12, name: "Pablo Escobar" },
        { id: 13, name: "Pablo Escobar" },
        { id: 14, name: "Pablo Escobar" },
        { id: 15, name: "Pablo Escobar" },
        { id: 16, name: "Pablo Escobar" },
        { id: 17, name: "Pablo Escobar" },
        { id: 18, name: "Pablo Escobar" },
        { id: 19, name: "Pablo Escobar" },
        { id: 20, name: "Pablo Escobar" },
        { id: 21, name: "Pablo Escobar" },
        { id: 22, name: "Pablo Escobar" },
        { id: 23, name: "Pablo Escobar" },
        { id: 24, name: "Pablo Escobar" },
        { id: 25, name: "Pablo Escobar" },
        { id: 26, name: "Pablo Escobar" },
        { id: 27, name: "Pablo Escobar" },
        { id: 28, name: "Pablo Escobar" },
        { id: 29, name: "Pablo Escobar" },
        { id: 30, name: "Pablo Escobar" },
        { id: 31, name: "Pablo Escobar" },
        { id: 32, name: "Pablo Escobar" },
        { id: 33, name: "Pablo Escobar" },
        { id: 34, name: "Pablo Escobar" },
        { id: 35, name: "Pablo Escobar" },
        { id: 36, name: "Pablo Escobar" },
        { id: 37, name: "Pablo Escobar" },
        { id: 38, name: "Pablo Escobar" },
        { id: 39, name: "Pablo Escobar" },
      ]
    }
  }
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