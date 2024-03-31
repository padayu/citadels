<template>
  <div class="BankTitle">Ваш банк:</div>
  <div class="container">
    <img :src="require('@/assets/coin.png')" alt="broken" class="coin_image"/>
    <p class="balance_number">{{ this.balance }}</p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "PlayerBank",
  computed: {
    ...mapState({
      balance: state => state.gameInfo.gameState.Player.Coins,
    }),
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 120px;
  height: 60px;
  border: rgb(28, 83, 55) solid 4px;
  border-radius: 20px;
  background-color: rgb(167, 220, 175);
  align-items: center;
}
.coin_image {
  width: 50px;
  height: 50px;
  margin: 5px;
}
.balance_number {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin: 5px;
}
.BankTitle {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin: 5px;
  text-align: center;
}
</style>