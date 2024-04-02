<template>
  <div class="characterDisplay">
    <img class="characterImage"
         :src="require(`@/assets/character_images/${this.character.image}`)" alt="broken"/>
    <img v-if="has_crown" class="crownImage" src="@/assets/crown.png" alt="broken"/>
    <div class="hoverTrigger"
         @mouseover="CharacterHoveredOver" @mouseleave="CharacterHoverCancel" @click="Interact"></div>
    <div class="ability-button-container">
      <ability-button v-for="ability in this.character.abilities" :key="ability.name" :ability="ability">
        {{ ability.name }}
      </ability-button>
    </div>
    <div v-if="this.hover" class="description">
      <div class="characterName">{{ this.character.name }}</div>
      <div class="characterAbilityDescription">
        <div v-for="item in this.character.description" v-html="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import AbilityButton from "@/components/UI/AbilityButton.vue";

export default {
  name: 'SelfCharacterDisplay',
  components: {AbilityButton},
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    CharacterHoveredOver() {
      this.hover = true;
    },
    CharacterHoverCancel() {
      this.hover = false;
    },
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    Interact() {
      if (this.active) {
        this.SendMessage("self_character_interact");
      }
    }
  },
  computed: {
    ...mapState({
      ws: state => state.websocket.ws,
      has_crown: state => state.gameInfo.gameState.Player.Crown,
      character: state => state.gameInfo.gameState.Player.Character,
    }),
  }
}
</script>

<style scoped>
.characterImage {
  width: 170px;
  height: 240px;
  position: absolute;
  left: 15px;
  top: 100px;
}
.crownImage {
  width: 200px;
  height: 200px;
  position: absolute;
  top: -20px;
  left: 0;
}
.characterDisplay {
  width: 200px;
  height: 350px;
}
.characterName {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1em;
  color: white;
  position: absolute;
  top: 110px;
  left: -290px;
  width: 300px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  text-align: center;
}
.characterAbilityDescription {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 0.7em;
  color: white;
  position: absolute;
  top: 140px;
  left: -290px;
  width: 300px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  text-align: center;
}
.hoverTrigger {
  width: 170px;
  height: 240px;
  position: absolute;
  left: 15px;
  top: 100px;
  background-color: rgba(0, 0, 0, 0);
}
.ability-button-container {
  position: absolute;
  top: 120px;
  left: 150px;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>