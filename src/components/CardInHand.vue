<template>
  <img :class="{cardImage: true, hoveredOver: hover, active: this.is_active}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"
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
      is_active: {
        type: Boolean,
        required: true,
      }
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
        if (this.is_active) {
          this.SendMessage("card_in_hand_interact, id= ", this.card.id);
        }
      }
    },
    computed: {
      ...mapState({
        ws: state => state.websocket.ws,
      }),
    }
  }
</script>

<style scoped>
  .cardImage {
    width: 60px;
    height: 90px;
  }
  .hoveredOver {
    transform: translateY(-10px);
  }
  .active {
    box-shadow: yellow 0 0 10px;
    cursor: pointer;
  }
</style>