<template>
  <div class="bg">
    <div class="window">
      <div class="header">Игра окончена</div>
      <div class="scoreboard">
        <div class="scoreboard-row" v-for="item in scoreboard">
          <div class="scoreboard-name">{{ item.name }}</div>
          <div class="scoreboard-score">{{ item.score }}</div>
        </div>
      </div>
      <button @click="$store.commit('gameInfo/CloseScoreboard')" class="close-button">Закрыть</button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ScoreboardWindow",
  computed: {
    ...mapState({
      scoreboard: state => state.gameInfo.scoreboard,
    }),
  }
}
</script>

<style scoped>
  .bg {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .window {
    border: black 3px solid;
    border-radius: 20px;
    padding: 10px;
    background-color: rgba(40, 150, 180, 1);
    height: 400px;
    width: 600px;
    position: relative;
  }
  .header {
    font-size: 2em;
    color: yellow;
    text-align: center;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 -2px 0 black, 0 2px 0 black;
    margin: 10px;
  }
  .scoreboard {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .scoreboard-row {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
    padding: 5px;
    margin-top: 5px;
  }
  .scoreboard-name {
    font-size: 1.5em;
    align-self: flex-start;
    display: inline-block;
  }
  .scoreboard-score {
    font-size: 1.5em;
    align-self: flex-end;
    display: inline-block;
  }
  .close-button {
    width: 120px;
    height: 50px;
    background-color: red;
    color: black;
    border: black 3px solid;
    font-size: 1.5em;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    left: 40%;
  }
</style>