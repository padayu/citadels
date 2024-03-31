<template>
  <div class="card">
    <img :class="{cardImage: true, active: this.is_active}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"/>
    <div v-if="this.hover" class="description">
      <p class="card-name">{{ card.name }}</p>
      <p class="card-cost">Стоимость: {{ card.cost }}</p>
      {{ card.description }}
    </div>
    <div :class="{hoverTrigger: true, clickable: this.is_active}" @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel" @click="Interact"></div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'MediumCard',
    props: {
      card: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        hover: false,
        is_active: true,
      }
    },
    methods: {
      cardHoveredOver() {
        this.hover = true;
      },
      cardHoverCancel() {
        this.hover = false;
      },
      SendMessage(message) {
        this.$store.dispatch('websocket/sendMessage', message)
      },
      Interact() {
        if (this.is_active) {
          this.$emit('cardClicked', this.card.id);
        }
      }
    },
    computed: {
      ...mapState({
        ws: state => state.websocket.ws,
      }),
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
  .clickable {
    cursor: pointer;
  }
  .card-name {
    margin-top: 2px;
    margin-bottom: 0;
  }
  .card-cost {
    margin-top: 0;
    margin-bottom: 2px;
    color: yellow;
  }
</style>