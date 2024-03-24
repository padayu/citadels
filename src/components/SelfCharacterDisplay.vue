<template>
  <div class="characterDisplay">
    <img :class="{characterImage: true, active: this.active}"
         src="../assets/character_images/King.png" alt="broken"/>
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
  name: 'SelfCharacterDisplay',
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
    active: {
      type: Boolean,
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
.active {
  box-shadow: yellow 1px 1px 10px, yellow -1px -1px 10px;
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
  font-size: 1em;
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
</style>