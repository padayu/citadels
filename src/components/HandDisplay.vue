<template>
  <TransitionGroup name="Hand" class="container" :style="{ width: `${containerWidth}px` }">
    <CardInHand v-for="card in cards" :active="true" :card="card" :key="card.id" class="item"
                :style="{ marginRight: `${calculateCardMargin(cards.length)}px` }"
                @removeCard="removeCard"/>
  </TransitionGroup>
</template>

<script>
  import CardInHand from "@/components/CardInHand.vue";
  import EnlargedCardView from "@/components/EnlargedCardView.vue";

  export default {
    components: {EnlargedCardView, CardInHand},
    data() {
      return {
        cards: [
          { name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
          { name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
          { name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
          { name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"},
          { name: 'card5', id: 5, image: "gru5.png", description: "This is a green card", color: "green"},
          { name: 'card6', id: 6, image: "gru1.png", description: "This is a blue card", color: "blue"},
          { name: 'card7', id: 7, image: "gru2.png", description: "This is a red card", color: "red"},
          { name: 'card8', id: 8, image: "gru3.png", description: "This is a pink card", color: "pink"},
          { name: 'card9', id: 9, image: "gru4.png", description: "This is a yellow card", color: "yellow"},
          { name: 'card10', id: 10, image: "gru5.png", description: "This is a green card", color: "green"},
          { name: 'card11', id: 11, image: "gru1.png", description: "This is a blue card", color: "blue"},
          { name: 'card12', id: 12, image: "gru2.png", description: "This is a red card", color: "red"},
          { name: 'card13', id: 13, image: "gru3.png", description: "This is a pink card", color: "pink"},
          { name: 'card14', id: 14, image: "gru4.png", description: "This is a yellow card", color: "yellow"},
          { name: 'card15', id: 15, image: "gru5.png", description: "This is a green card", color: "green"},
          { name: 'card16', id: 16, image: "gru1.png", description: "This is a blue card", color: "blue"},
          { name: 'card17', id: 17, image: "gru2.png", description: "This is a red card", color: "red"},
          { name: 'card18', id: 18, image: "gru3.png", description: "This is a pink card", color: "pink"},
          { name: 'card19', id: 19, image: "gru4.png", description: "This is a yellow card", color: "yellow"},
          { name: 'card20', id: 20, image: "gru5.png", description: "This is a green card", color: "green"},
        ],
        cardWidth: 60,
        containerWidth: 550,
        show: false
      };
    },
    methods: {
      calculateCardMargin(numberOfCards) {
        return Math.min((this.containerWidth - numberOfCards * this.cardWidth) / (numberOfCards - 1), 10);
      },
      setHoveredOverCard(card) {
        this.show = true;
        this.hoveredOverCard = card;
      },
      hideEnlargedCard() {
        this.show = false;
      },
      removeCard(card) {
        this.cards = this.cards.filter(c => c.id !== card.id);
        this.hideEnlargedCard();
      }
    }
  };
</script>


<style scoped>
  .container {
    padding-top: 20px;
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling if items overflow */
  }
  .item {
    flex: 0 0 auto; /* Prevent items from growing or shrinking */
    padding-right: 0; /* Add padding to compensate for the negative margin */
    position: relative;
  }
  .Hand-enter-active,
  .Hand-leave-active {
    transition: all 0.5s ease;
  }
  .Hand-enter-from,
  .Hand-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>