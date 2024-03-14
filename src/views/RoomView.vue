<template>
  <div>room view</div>
  <RoomPlayerList class="playerList"/>
  <button>Start game</button>
  <button>Leave room</button>
</template>

<script>
// @ is an alias to /src

import RoomPlayerList from "@/components/RoomPlayerList.vue";

export default {
  name: 'RoomView',
  components: {RoomPlayerList},
}
</script>

<style>
.centered {
  margin: auto;
  text-align: center;
}
</style>