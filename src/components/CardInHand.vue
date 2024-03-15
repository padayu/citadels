<template>
  <img :class="{cardImage: true, hoveredOver: hover}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"
       @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel" @click="$emit('removeCard', card)"/>
</template>

<script>
  export default {
    name: 'CardInHand',
    props: {
      card: {
        type: Object,
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
        this.enlargeCard();
      },
      cardHoverCancel() {
        this.hover = false;
        this.hideCard();
      },
      enlargeCard() {
        this.$emit('enlargeCard', this.card);
      },
      hideCard() {
        this.$emit('hideCard');
      }
    }
  }
</script>

<style scoped>
  .cardImage {
    width: 100px;
    height: 150px;
  }
  .hoveredOver {
    transform: translateY(-10px);
  }
</style>