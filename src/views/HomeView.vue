<template>
  <h1 class="centered game-title">Citadels</h1>
  <div class="centered main-menu"><menu-input v-model="this.input_player_name" placeholder="ИМЯ"/></div>
  <div class="centered main-menu"><menu-button @click="CreateRoom">СОЗДАТЬ ИГРУ</menu-button></div>
  <div class="centered main-menu"><menu-input v-model="this.input_room_code" :upper="true" placeholder="КОД"/></div>
  <div class="centered main-menu"><menu-button @click="JoinRoom">ПРИСОЕДИНИТЬСЯ</menu-button></div>
</template>

<script>
// @ is an alias to /src
import MenuButton from "@/components/UI/MenuButton.vue";
import MenuInput from "@/components/UI/MenuInput.vue";
import DialogWindow from "@/components/UI/DialogWindow.vue";
import {mapState} from "vuex";

export default {
  name: 'HomeView',
  components: {DialogWindow, MenuInput, MenuButton},
  data () {
    return {
      input_player_name: "player" + (Math.floor(Math.random() * (1000 - 1)) + 1),
      input_room_code: "",
    }
  },
  methods: {
    ShowDialog(header, content) {
      console.log("Showing dialog");
      this.$store.commit('componentInfo/SetDialogHeader', header);
      this.$store.commit('componentInfo/SetDialogContent', content);
      this.$store.commit('componentInfo/ShowDialog');
      console.log(this.$store.state.componentInfo.dialog_visible);
    },
    CreateRoom() {
      this.$store.commit('gameInfo/SetPlayerName', this.input_player_name);
      if (!this.CheckNameValidity()) {
        return;
      }
      this.SendMessage({
        type: "lobby_create",
        payload: {"host": this.playerName}
      });
    },
    SendMessage(message) {
      this.$store.dispatch('websocket/sendMessage', message)
    },
    JoinRoom() {
      this.$store.commit('gameInfo/SetPlayerName', this.input_player_name);
      this.$store.commit('gameInfo/SetRoomCode', this.input_room_code);
      if (!this.CheckNameValidity()) {
        return;
      }
      this.SendMessage({
        type: "lobby_join",
        payload: {"name": this.playerName, code: this.roomCode}
      });
    },
    CheckNameValidity() {
      if (this.input_player_name.length < 3 || this.input_player_name.length > 20) {
        this.ShowDialog("Ошибка", "Имя должно содержать от 3 до 20 символов.")
        return false;
      }
      else {
        return true;
      }
    }
  },
  computed: {
    ...mapState({
      ws: state => state.websocket.ws,
      roomCode: state => state.gameInfo.roomCode,
      playerName: state => state.gameInfo.selfPlayerName,
    }),
  }
}
</script>

<style scoped src="./styles/HomeView.scss" lang="scss">
</style>
