<template>
  <div class="characterDisplay">
    <img :class="{characterImage: true, active: this.active}"
         :src="require(`@/assets/character_images/${this.character.image}`)" alt="broken"/>
    <img class="crownImage" src="@/assets/crown.png" alt="broken"/>
    <div class="hoverTrigger" @mouseover="characterHoveredOver" @mouseleave="characterHoverCancel"></div>
    <div v-if="this.hover" class="description">
      <div class="characterName">{{ this.character.name }}</div>
      <div class="characterAbilityDescription">{{ this.character.ability_description }}</div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    characterHoveredOver() {
      this.hover = true;
    },
    characterHoverCancel() {
      this.hover = false;
    },
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
  top: 0px;
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
</style>