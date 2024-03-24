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

<style scoped src="./styles/HomeView.scss" lang="scss">
</style>
