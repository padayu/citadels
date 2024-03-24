export const enlargedCardModule = {
    state: () => ({
        placeholder: {
            name: 'placeholder',
            id: 0,
            image: "cardPlaceholder.png",
            description: "You should not be reading this",
            color: "grey"
        },
        enlargedCard: {
            name: 'placeholder',
            id: 0,
            image: "cardPlaceholder.png",
            description: "You should not be reading this",
            color: "grey"
        },
        visible: false
    }),
    getters: {
        getEnlargedCard(state) {
            return state.enlargedCard;
        },
        getPlaceholder(state) {
            return state.placeholder;
        },
        getVisible(state) {
            return state.visible;
        }
    },
    mutations: {
        setEnlargedCard(state, card) {
            state.enlargedCard = card;
        },
        resetEnlargedCard(state) {
            state.enlargedCard = state.placeholder;
        },
        makeVisible(state) {
            state.visible = true;
        },
        makeInvisible(state) {
            state.visible = false;
        },
    },
    actions: {
        enlargeCard({commit}, card) {
            commit("setEnlargedCard", card);
            commit("makeVisible");
            console.log("Enlarged card: ", card);
        },
    },
    namespaced: true
}