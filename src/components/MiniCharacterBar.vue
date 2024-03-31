<template>
  <div class="container">
      <mini-character-display v-for="character in this.characters" :active="true" :character="character"
                              :key="character.id" class="item"/>
  </div>
</template>

<script>
import MiniCharacterDisplay from "@/components/MiniCharacterDisplay.vue";
import {mapState} from "vuex";

export default {
  name: "mini-character-bar",
  components: {MiniCharacterDisplay},
  computed: {
    ...mapState({
      characters: state => state.gameInfo.gameState.Characters,
    }),
  }
}
</script>

<style scoped>
.item {
  display: inline-block;
  margin-right: 5px;
}
</style>