<template>
  <div class="log-container" :style="{height: `${GetHeight()}px`}">
    <div v-for="message in messages" class="log-message"> {{ message}} </div>
    <div class="hover_trigger" @mouseover="setHoverTrue" @mouseleave="setHoverFalse"></div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "GameLog",
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    GetHeight() {
      if (this.hover) {
        return 130;
      } else {
        return 40;
      }
    },
    setHoverTrue() {
      this.hover = !this.hover;
    },
    setHoverFalse() {
      this.hover = false;
    }
  },
  computed: {
    ...mapState({
      messages: state => state.gameInfo.chatMessages,
    }),
  }
}
</script>

<style scoped>
  .log-container {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 5px;
    align-items: center;
    z-index: 1000;
    overflow-y: hidden;
  }
  .log-message {
    width: 90%;
    height: 40px;
    color: greenyellow;
    margin-bottom: 5px;
    font-size: 0.7em;
  }
  .hover_trigger {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
  }
</style>