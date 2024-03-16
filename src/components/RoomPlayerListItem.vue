<template>
  <div class="player"
       :style="{textShadow: `
       1px 0 ${playerColors[player.id % playerColors.length]},
       0 1px ${playerColors[player.id % playerColors.length]},
       1px 0 ${playerColors[player.id % playerColors.length]},
       0 -1px ${playerColors[player.id % playerColors.length]}`}">
    {{ player.name }}
    <button class="kick">Кикнуть</button>
  </div>
</template>

<script>
export default {
  name: 'RoomPlayerListItem',
  props: {
    player: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      playerColors: [
        'rgb(77, 77, 255)',
        'rgb(255, 150, 100)',
        'rgb(77, 255, 77)',
        'rgb(77, 255, 255)',
        'rgb(255, 77, 255)',
        'rgb(255, 0, 0)',
        'rgb(255, 255, 0)',
        'rgb(170, 0, 255)',
        'rgb(150, 77, 77)',
        'rgb(255, 255, 255)'
      ],
    }
  }
}
</script>

<style scoped>
.player {
  height: 45px;
  margin: 10px;
  border: solid rgb(0, 0, 0) 2px;
  padding: 5px;
  font-size: 2em;
  font-family: "JetBrains Mono ExtraBold", monospace;
}
.kick {
  color: black;
  background-color: rgb(255, 77, 77);
  border: rgb(238, 0, 6) solid 4px;
  padding: 3px;
  border-radius: 10px;
  font-size: 0.8em;
  font-family: "JetBrains Mono ExtraBold", monospace;
  cursor: pointer;
  float: right;
  margin-right: 10px;
}
.colored_outline {

}
</style>
