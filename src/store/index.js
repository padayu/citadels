import { createStore } from 'vuex'
import { enlargedCardModule } from '@/store/enlargedCardModule'
import websocketModule from "@/store/websocketModule";
import messageHandlerModule from "@/store/messageHandlerModule";
import dialogModule from "@/store/dialogModule";
import gameInfoModule from "@/store/gameInfoModule";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    enlargedCard: enlargedCardModule,
    websocket: websocketModule,
    messageHandler: messageHandlerModule,
    dialog: dialogModule,
    gameInfo: gameInfoModule,
  }
})
