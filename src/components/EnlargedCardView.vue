<template>
    <div class="centered">
        <h1 :style="{visibility: show ? 'visible' : 'hidden'}" >{{ card.name }}</h1>
        <img :style="{visibility: show ? 'visible' : 'hidden'}" class="enlarged_card_image"
             :src="require(`@/assets/card_images/${card.image}`)" alt="Card Image">
        <p :style="{visibility: show ? 'visible' : 'hidden'}" >{{ card.description }}</p>
    </div>
</template>

<script>
export default {
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
</style>