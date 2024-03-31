<template>
    <div class="centered" :style="{visibility: show ? 'visible' : 'hidden'}">
        <h1 class="card-name">{{ card.name }}</h1>
        <p class="card-cost">Стоимость: {{card.cost}} </p>
        <img class="enlarged_card_image"
             :src="require(`@/assets/card_images/${card.image}`)" alt="Card Image">
        <p>{{ card.description }}</p>
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
  }
}
</script>

<style scoped>
.enlarged_card_image {
    width: 200px;
    height: 300px;
}
.card-name {
  margin-top: 0px;
  margin-bottom: 0px;
}
.card-cost {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>