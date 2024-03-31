<template>
  <div class="page">
    <router-view/>
  </div>
  <dialog-window v-if="dialog_visible">
    <template v-slot:header>
      {{ dialog_header }}
    </template>
    <template v-slot:content>
      {{ dialog_content }}
    </template>
  </dialog-window>
</template>

<script>
import {defineComponent, ref} from "vue";
import {mapMutations, mapState} from "vuex";
import DialogWindow from "@/components/UI/DialogWindow.vue";

export default defineComponent({
  name: 'App',
  components: {DialogWindow},
  created() {
    this.$store.dispatch('websocket/initializeWebSocket');
  },
  computed: {
    ...mapState({
      dialog_visible: state => state.componentInfo.dialog_visible,
      dialog_header: state => state.componentInfo.dialog_header,
      dialog_content: state => state.componentInfo.dialog_content,
    }),
    ...mapMutations({
      ShowDialog: "componentInfo/ShowDialog",
      HideDialog: "componentInfo/HideDialog",
      SetDialogHeader: "componentInfo/SetDialogHeader",
      SetDialogContent: "componentInfo/SetDialogContent",
    }),
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.centered {
  margin: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.page {
  background-image: url('@/assets/background.png');
  background-repeat: repeat;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>