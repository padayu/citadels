<template>
  <div>
    <TransitionGroup name="Hand">
      <CardInHand v-for="card in this.cards" :is_active="true" :card="card" :key="card.id" class="item"
                  :style="{ marginRight: `${calculateCardMargin(cards.length)}px` }"/>
    </TransitionGroup>
  </div>
</template>

<script>
  import CardInHand from "@/components/CardInHand.vue";
  import EnlargedCardView from "@/components/EnlargedCardView.vue";
  import {mapState} from "vuex";

  export default {
    name: "HandDisplay",
    components: {EnlargedCardView, CardInHand},
    data() {
      return {
        cardWidth: 60,
        containerWidth: 550,
        show: false
      };
    },
    methods: {
      calculateCardMargin(numberOfCards) {
        return Math.min((this.containerWidth - numberOfCards * this.cardWidth) / (numberOfCards - 1), 10);
      },
    },
    computed: {
      ...mapState({
        cards: state => state.gameInfo.gameState.Player.Hand,
      }),
    }
  };
</script>


<style scoped>
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