<template>
  <div class="characterDisplay">
    <img :class="{characterImage: true, active: this.is_active}"
         :src="require(`@/assets/character_images/${this.defaultImage}`)" alt="broken"/>
    <img class="crownImage" v-if="this.has_crown" src="@/assets/crown.png" alt="broken"/>
    <img class="absentImage" v-if="this.character.absent" src="@/assets/absent.png" alt="broken"/>
    <img class="deadImage" v-if="this.character.dead" src="@/assets/dead.png" alt="broken"/>
    <img class="robbedImage" v-if="this.character.robbed" src="@/assets/robbed.png" alt="broken"/>
    <img class="turnMarker" v-if="this.character.turn" src="@/assets/turn_marker.png" alt="broken"/>
    <div :class="{hoverTrigger: true, clickable: this.is_active}"
         @mouseover="characterHoveredOver" @mouseleave="characterHoverCancel" @click="Interact"></div>
    <div v-if="this.hover" class="description">
      <div class="characterName">{{ this.character.card.name }}</div>
      <div class="characterAbilityDescription">
        <div v-for="item in this.character.card.description" v-html="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MiniCharacterDisplay",
  data() {
    return {
      hover: false,
    }
  },
  props: {
    character: {
      type: Object,
      required: true,
    },
    is_active: {
      type: Boolean,
      required: true,
    },
    has_crown: Boolean,
  },
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    Interact() {
      if (this.is_active) {
          this.$emit("characterClicked", this.character.card.class);
        }
    },
    characterHoveredOver() {
      this.hover = true;
    },
    characterHoverCancel() {
      this.hover = false;
    },
  },
  computed: {
    ...mapState({
      name: state => state.gameInfo.selfPlayerName,
      code: state => state.gameInfo.roomCode,
      ability_pending: state => state.gameInfo.gameState.AbilityPending,
      ws: state => state.websocket.ws,
    }),
    defaultImage() {
      if (this.character.card.image === "") {
        return "Unknown.png"
      } else {
        return this.character.card.image;
      }
    }
  }
}
</script>

<style scoped>
.characterDisplay {
  width: 30px;
  height: 55px;
  position: relative;
}
.characterImage {
  width: 30px;
  height: 45px;
  position: relative;
  left: 0;
  top: 0;
}
.absentImage {
  width: 30px;
  height: 45px;
  position: absolute;
  left: 0;
  top: 0;
}
.deadImage {
  width: 30px;
  height: 45px;
  position: absolute;
  left: 0;
  top: 0;
}
.robbedImage {
  width: 30px;
  height: 45px;
  position: absolute;
  left: 0;
  top: 0;
}
.crownImage {
  width: 30px;
  height: 30px;
  position: absolute;
  top: -15px;
  left: 0;
}
.turnMarker {
  width: 30px;
  height: 30px;
  position: absolute;
  top: -40px;
  left: 0;
}
.description {
  position: absolute;
  z-index: 1;
  right: 0;
  top: -105px;
}
.characterName {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1em;
  color: white;
  position: absolute;
  top: 55px;
  left: 0;
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
  top: 85px;
  left: 0;
  width: 300px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  text-align: center;
}
.hoverTrigger {
  width: 30px;
  height: 45px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
}
.active {
  box-shadow: -2px -2px yellow, -2px 2px yellow, 2px -2px yellow, 2px 2px yellow;
}
.clickable {
  cursor: pointer;
}
</style>