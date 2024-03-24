<template>
  <div class="card">
    <img :class="{cardImage: true, active: this.active}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"/>
    <div v-if="this.hover" class="description">
      <p>{{ card.name }}</p>
      {{ card.description }}
    </div>
    <div class="hoverTrigger" @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel"></div>
  </div>
</template>

<script>
  export default {
    name: 'CardInCity',
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        hover: false,
        active: true,
      }
    },
    methods: {
      cardHoveredOver() {
        this.hover = true;
      },
      cardHoverCancel() {
        this.hover = false;
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 90px;
    height: 135px;
    position: relative;
  }
  .cardImage {
    width: 90px;
    height: 135px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .hoverTrigger {
    width: 90px;
    height: 135px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .description {
    width: 90px;
    height: 135px;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    font-size: 0.8em;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
  }
  .active {
    box-shadow: yellow 1px 1px 10px, yellow -1px -1px 10px;
  }
</style>