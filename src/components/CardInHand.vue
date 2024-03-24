<template>
  <img :class="{cardImage: true, hoveredOver: hover, active: this.active}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"
       @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel" @click="$emit('removeCard', card)"/>
</template>

<script>

  export default {
    name: 'CardInHand',
    props: {
      card: {
        type: Object,
        required: true,
      },
      active: {
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
    },
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
  }
</style>