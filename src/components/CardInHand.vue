<template>
  <img :class="{cardImage: true, hoveredOver: hover}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"
       @mouseover="hover = true" @mouseleave="hover = false"/>
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