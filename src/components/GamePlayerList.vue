<template>
  <div class="container">
    <custom-scrollbar :style="{ width: '480px', height: '600px' }" v-if="players.length > 0">
    <TransitionGroup name="gamePlayerList">
      <game-player-list-item
          v-for="player in players"
          :displayedPlayer="player"
          :key="player.id"
          class="item"
      />
    </TransitionGroup>
    </custom-scrollbar>
  </div>
</template>

<script>
import GamePlayerListItem from "@/components/GamePlayerListItem.vue";
import {mapState} from "vuex";

export default {
  name: "GamePlayerList",
  components: {GamePlayerListItem},
  computed: {
    ...mapState({
      players: state => state.gameInfo.gameState.Players,
    }),
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 600px;
  border: black 3px solid;
  border-radius: 20px;
  padding: 10px;
  background-color: rgba(40, 150, 180, 1);
}
</style>