<template>
  <div class="characterDisplay">
    <img :class="{characterImage: true, active: this.is_active}"
         :src="require(`@/assets/character_images/${this.character.image}`)" alt="broken"/>
    <img class="crownImage" v-if="this.has_crown" src="@/assets/crown.png" alt="broken"/>
    <img class="absentImage" v-if="this.character.is_absent" src="@/assets/absent.png" alt="broken"/>
    <img class="deadImage" v-if="this.character.is_dead" src="@/assets/dead.png" alt="broken"/>
    <img class="robbedImage" v-if="this.character.is_robbed" src="@/assets/robbed.png" alt="broken"/>
    <div :class="{hoverTrigger: true, clickable: this.is_active}"
         @mouseover="characterHoveredOver" @mouseleave="characterHoverCancel" @click="Interact"></div>
    <div v-if="this.hover" class="description">
      <div class="characterName">{{ this.character.name }}</div>
      <div class="characterAbilityDescription">{{ this.character.ability_description }}</div>
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
      has_crown: false,
      is_active: true,
    }
  },
  props: {
    character: {
      type: Object,
      required: true,
    }
  },
  methods: {
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    Interact() {
      if (this.is_active) {
        this.SendMessage("mini_character_interact, id= ", this.character.id);
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
      ws: state => state.websocket.ws,
    }),
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
.description {
  position: absolute;
  z-index: 1;
  right: 0px;
  top: -105px;
}
.characterName {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1em;
  color: white;
  position: absolute;
  top: 55px;
  left: 0px;
  width: 300px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  text-align: center;
}
.characterAbilityDescription {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1em;
  color: white;
  position: absolute;
  top: 85px;
  left: 0px;
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
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0);
}
.active {
  box-shadow: -2px -2px yellow, -2px 2px yellow, 2px -2px yellow, 2px 2px yellow;
}
.clickable {
  cursor: pointer;
}
</style>