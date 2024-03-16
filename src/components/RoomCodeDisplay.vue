<template>
  <div class="container">
    <div class="centered above_room_code">код комнаты:</div>
    <div class="centered room_code">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomCodeDisplay"
}
</script>

<style scoped>
.above_room_code {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin-top: 10px;
}
.room_code {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 6em;
  color: yellow;
  text-shadow: -4px 0 black, 0 4px black, 4px 0 black, 0 -4px black;
  margin-top: 5px;
}
.container {
  width: 450px;
  height: 200px;
  border: rgb(28, 83, 55) solid 4px;
  border-radius: 20px;
  background-color: rgb(167, 220, 175);
}
</style>