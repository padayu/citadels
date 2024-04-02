<template>
    <div class="dialog-window-bg">
      <div class="dialog-window">
        <div class="dialog-window-header">
          <h2><slot name="header"></slot></h2>
        </div>
        <div class="dialog-window-content">
          <p><slot name="content"></slot></p>
        </div>
        <div class="dialog-window-footer">
          <button @click="HideDialog" class="close_button">Закрыть</button>
        </div>
      </div>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "DialogWindow",
  computed: {
    ...mapMutations({
      ShowDialog: "componentInfo/ShowDialog",
      HideDialog: "componentInfo/HideDialog",
      SetDialogHeader: "componentInfo/SetDialogHeader",
      SetDialogContent: "componentInfo/SetDialogContent",
    }),
  }
}
</script>

<style scoped>
.dialog-window-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.dialog-window {
  width: 500px;
  height: 400px;
  border: black 4px solid;
  background-color: aquamarine;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.dialog-window-header {
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-family: "JetBrains Mono ExtraBold", monospace;
    color: red;
}
.dialog-window-content {
    width: 450px;
    height: 200px;
    padding: 10px;
}
.dialog-window-footer {
    width: 450px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.close_button {
  width: 150px;
  color: black;
  background-color: rgb(86, 241, 73);
  border: rgb(22, 131, 26) solid 4px;
  padding: 10px;
  border-radius: 20px;
  font-size: 2em;
  font-family: "JetBrains Mono ExtraBold", monospace;
  cursor: pointer;
}
</style>