<template>
  <div class="cityTitle">Ваш город:</div>
  <TransitionGroup name="City" class="container">
    <card-in-city v-for="card in city" :active="true" :card="card" :key="card.id" class="item"/>
  </TransitionGroup>
</template>

<script>
import CardInCity from "@/components/CardInCity.vue";

export default {
  name: "SelfCity",
  components: {CardInCity},
  data() {
    return {
      city: [
        { name: 'card1', id: 1, image: "gru1.png", description: "This is a blue card", color: "blue"},
        { name: 'card2', id: 2, image: "gru2.png", description: "This is a red card", color: "red"},
        { name: 'card3', id: 3, image: "gru3.png", description: "This is a pink card", color: "pink"},
        { name: 'card4', id: 4, image: "gru4.png", description: "This is a yellow card", color: "yellow"},
        { name: 'card5', id: 5, image: "gru5.png", description: "This is a green card", color: "green"},
        { name: 'card6', id: 6, image: "gru1.png", description: "This is a blue card", color: "blue"},
        { name: 'card7', id: 7, image: "gru2.png", description: "This is a red card", color: "red"},
          ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  overflow-x: auto;
  width: 600px;
  height: 400px;
}
.cityTitle {
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.5em;
  color: yellow;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
}
.item {
  display: inline-block;
  margin-right: 10px;
}
</style>