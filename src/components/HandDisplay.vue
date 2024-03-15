<template>
  <div :style="{width: `${containerWidth}px`}">
    <enlarged-card-view :card="hoveredOverCard" :show="show"/>
  </div>
  <TransitionGroup name="Hand" class="container" :style="{ width: `${containerWidth}px` }">
    <CardInHand v-for="card in cards" :card="card" :key="card.id" class="item"
                :style="{ marginRight: `${calculateCardMargin(cards.length)}px` }"
                @enlargeCard="setHoveredOverCard" @hideCard="hideEnlargedCard" @removeCard="removeCard"/>
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
          { name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card"},
          { name: 'card2', id: 2, image: "gru2.png", description: "This is a red card"},
          { name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card"},
          { name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card"},
          { name: 'card5', id: 5, image: "gru5.png", description: "This is a green card"},
          { name: 'card6', id: 6, image: "gru1.png", description: "This is a blue card"},
          { name: 'card7', id: 7, image: "gru2.png", description: "This is a red card"},
          { name: 'card8', id: 8, image: "gru3.png", description: "This is a pink card"},
          { name: 'card9', id: 9, image: "gru4.png", description: "This is a yellow card"},
          { name: 'card10', id: 10, image: "gru5.png", description: "This is a green card"},
          { name: 'card11', id: 11, image: "gru1.png", description: "This is a blue card"},
          { name: 'card12', id: 12, image: "gru2.png", description: "This is a red card"},
          { name: 'card13', id: 13, image: "gru3.png", description: "This is a pink card"},
          { name: 'card14', id: 14, image: "gru4.png", description: "This is a yellow card"},
          { name: 'card15', id: 15, image: "gru5.png", description: "This is a green card"},
          { name: 'card16', id: 16, image: "gru1.png", description: "This is a blue card"},
          { name: 'card17', id: 17, image: "gru2.png", description: "This is a red card"},
          { name: 'card18', id: 18, image: "gru3.png", description: "This is a pink card"},
          { name: 'card19', id: 19, image: "gru4.png", description: "This is a yellow card"},
          { name: 'card20', id: 20, image: "gru5.png", description: "This is a green card"},
        ],
        hoveredOverCard: {
          name: 'placeholder', id: 0, image: "cardPlaceholder.png", description: "You should not be reading this"
        },
        cardWidth: 100,
        containerWidth: 700,
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