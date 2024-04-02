<template>
    <div class="centered" :style="{visibility: show ? 'visible' : 'hidden', width: '320px'}">
        <h1 class="card-name">{{ card.name }}</h1>
        <p class="card-cost">Стоимость: {{ card.price }} </p>
        <img class="enlarged_card_image"
             :src="require(`@/assets/card_images/${card.image}`)" alt="Card Image">
        <p class="description">{{ this.descriptionContent() }}</p>
    </div>
</template>

<script>
export default {
  name: 'EnlargedCardView',
  props: {
    card: {
      type: Object,
      required: true,
    },
    show: Boolean
  },
  methods: {
    descriptionContent() {
      let content = "";
      for (const index in this.card.description) {
        content += this.card.description[index] + "\n";
      }
      return content;
    },
  }
}
</script>

<style scoped>
.enlarged_card_image {
    width: 200px;
    height: 300px;
    border-radius: 30px;
    border: 3px solid black;
}
.card-name {
  margin-top: 0;
  margin-bottom: 0;
}
.card-cost {
  margin-top: 0;
  margin-bottom: 0;
}
.description {
  margin-top: 0;
  font-size: 1em;
}
</style>