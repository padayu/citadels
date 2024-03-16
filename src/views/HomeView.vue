<template>
  <h1 class="centered game_title">Citadels</h1>
  <div class="centered main_menu"><menu-input placeholder="ИМЯ"/></div>
  <div class="centered main_menu"><menu-button>СОЗДАТЬ ИГРУ</menu-button></div>
  <div class="centered main_menu"><menu-input placeholder="КОД"/></div>
  <div class="centered main_menu"><menu-button>ПРИСОЕДИНИТЬСЯ</menu-button></div>
</template>

<script>
// @ is an alias to /src

import MenuButton from "@/components/UI/MenuButton.vue";
import MenuInput from "@/components/UI/MenuInput.vue";

export default {
  name: 'HomeView',
  components: {MenuInput, MenuButton},
}
</script>

<style>
.game_title {
  font-family: 'Cinzel Decorative', cursive;
  font-size: 5em;
  color: yellow;
  text-shadow: -4px 0 black, 0 4px black, 4px 0 black, 0 -4px black;
  margin-top: 15px;
  margin-bottom: 60px
}
.main_menu {
  margin-top: 30px;
}
</style>
