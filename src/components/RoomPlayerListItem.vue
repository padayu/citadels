<template>
  <div class="player">
    {{ this.player.name }}, id={{ this.player.id }}
    <button>Kick</button>
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
  }
}
</script>

<style scoped>
</style>
