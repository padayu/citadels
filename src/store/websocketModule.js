export default {
    state: {
        ws: null,
    },
    getters: {
        getWs(state) {
            return state.ws;
        },
    },
    mutations: {
        SET_WS(state, ws) {
            state.ws = ws;
        },
    },
    actions: {
        initializeWebSocket({ commit, dispatch }) {
            const ws = new WebSocket('ws://192.168.31.93:1337/ws');
            ws.onopen = () => console.log('WebSocket connection established');
            ws.onmessage = (event) => {
                console.log('Received message:', JSON.stringify(JSON.parse(event.data), null, 2));
                dispatch('messageHandler/HandleMessage', JSON.parse(event.data), { root: true });
            };
            ws.onclose = () => {
                console.log('WebSocket connection closed');
                console.log('Reconnecting...');
                setTimeout(() => dispatch('initializeWebSocket'), 1000);
            };
            ws.onerror = (error) => console.error('WebSocket error:', error);
            commit('SET_WS', ws);
            console.log('WebSocket initialized')
        },
        sendMessage({state}, message) {
            state.ws.send(JSON.stringify(message));
            console.log('Sent message:', message);
        }
    },
    namespaced: true,
};