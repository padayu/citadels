<template>
  <div class="container" :style="{ width: `${containerWidth}px` }">
    <CardInHand v-for="card in cards" :card="card" :key="card.id" class="item"
                :style="{ marginRight: `${card.id != cards.length ? calculateCardMargin(cards.length) : 0}px` }"/>
  </div>
</template>

<script>
  import CardInHand from "@/components/CardInHand.vue";

  export default {
    components: {CardInHand},
    data() {
      return {
        cards: [
          { name: 'card1', id: 1, image: "gru1.png"},
          { name: 'card2', id: 2, image: "gru2.png"},
          { name: 'card3', id: 3, image: "gru3.png"},
          { name: 'card4', id: 4, image: "gru4.png"},
          { name: 'card5', id: 5, image: "gru5.png"},
          { name: 'card6', id: 6, image: "gru1.png"},
          { name: 'card7', id: 7, image: "gru2.png"},
          { name: 'card8', id: 8, image: "gru3.png"},
          { name: 'card9', id: 9, image: "gru4.png"},
          { name: 'card10', id: 10, image: "gru5.png"}
        ],
        cardWidth: 100,
        containerWidth: 700,
      };
    },
    methods: {
      calculateCardMargin(numberOfCards) {
        return (this.containerWidth - numberOfCards * this.cardWidth) / (numberOfCards - 1);
      }
    }
  };
</script>


<style scoped>
  .container {
    padding-top: 50px;
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling if items overflow */
  }

  .item {
    flex: 0 0 auto; /* Prevent items from growing or shrinking */
    padding-right: 0; /* Add padding to compensate for the negative margin */
  }
</style>