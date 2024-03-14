<template>
  <div>Player list:</div>
  <div class="playerList">
    <TransitionGroup name="roomPlayerList" v-if="players.length > 0">
      <RoomPlayerListItem
          v-for="player in players"
          :player="player"
          :key="player.id"
      />
    </TransitionGroup>
    <div v-else>
      <h1 style="color: red">There are no players in this room</h1>
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
      ]
    }
  }
}
</script>

<style scoped>
  .playerList {
    padding: 12px;
    background-color: #42b983;
    border: solid coral 4px;
    border-radius: 20px;
    height: 100px;
    width: 500px;
  }
</style>