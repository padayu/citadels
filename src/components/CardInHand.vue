<template>
  <img :class="{cardImage: true, hoveredOver: this.hover, active: this.card.active}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"
       @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel" @click="Interact"/>
</template>

<script>

  import {mapState} from "vuex";

  export default {
    name: 'CardInHand',
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        hover: false,
      }
    },
    methods: {
      cardHoveredOver() {
        this.hover = true;
        this.$store.dispatch('enlargedCard/enlargeCard', this.card);
      },
      cardHoverCancel() {
        this.hover = false;
        this.$store.commit('enlargedCard/makeInvisible')
      },
      SendMessage(message) {
        this.$store.dispatch('websocket/sendMessage', message)
      },
      Interact() {
        if (this.card.active) {
          this.cardHoverCancel();
          this.SendMessage({
            "type": "game_construct_building_ability",
            "payload": {
              "name": this.name,
              "code": this.code,
              "id": this.card.id,
            }
          });
        }
      }
    },
    computed: {
      ...mapState({
        name: state => state.gameInfo.selfPlayerName,
        code: state => state.gameInfo.roomCode,
        ws: state => state.websocket.ws,
      }),
    }
  }
</script>

<style scoped>
  .cardImage {
    width: 60px;
    height: 90px;
    border-radius: 7px;
  }
  .hoveredOver {
    transform: translateY(-10px);
  }
  .active {
    box-shadow: yellow 0 0 10px;
    cursor: pointer;
  }
</style>