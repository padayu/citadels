<template>
  <div class="miniCardImitator" :style="{ backgroundColor: this.card.color }"
       @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel"/>
</template>

<script>
export default {
  name: "MiniCardInCity",
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
  methods: {
    cardHoveredOver() {
      this.$store.dispatch('enlargedCard/enlargeCard', this.card);
    },
    cardHoverCancel() {
      this.$store.commit('enlargedCard/makeInvisible')
    },
  }
}
</script>

<style scoped>
.miniCardImitator {
  width: 26px;
  height: 39px;
  border: 3px solid black;
}
</style>