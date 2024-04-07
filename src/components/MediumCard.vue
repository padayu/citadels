<template>
  <div class="card">
    <img :class="{cardImage: true, active: this.card.active}" :src="require(`@/assets/card_images/${card.image}`)" alt="broken"/>
    <div v-if="this.hover" class="description">
      <p class="card-name">{{ card.name }}</p>
      <p class="card-cost">Стоимость: {{ card.price }}</p>
      {{ this.descriptionContent }}
    </div>
    <div :class="{hoverTrigger: true, clickable: this.card.active}" @mouseover="cardHoveredOver" @mouseleave="cardHoverCancel" @click="Interact"></div>
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
        if (this.card.active) {
          if (this.ability_pending) {
            this.SendMessage({
              "type": "game_target_ability",
              "payload": {
                "name": this.name,
                "code": this.code,
                "target_area": "card",
                "target_value": this.card.id.toString(),
              }
            });
            this.$store.commit('enlargedCard/makeInvisible')
          }
          else {
            this.$emit('cardClicked', this.card.id);
          }
        }
      }
    },
    computed: {
      ...mapState({
        name: state => state.gameInfo.selfPlayerName,
        code: state => state.gameInfo.roomCode,
        ability_pending: state => state.gameInfo.gameState.AbilityPending,
        ws: state => state.websocket.ws,
      }),
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
    border-radius: 12px;
  }
  .hoverTrigger {
    width: 90px;
    height: 135px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
  }
  .description {
    width: 90px;
    height: 135px;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    font-size: 0.6em;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
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