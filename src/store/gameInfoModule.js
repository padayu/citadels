export default {
    state: {
        selfPlayerName: "",
        roomCode: "",
        isHost: false,
        lobbyPlayerList: [],
        choosableCharacters: [],
        showCharacterChoice: false,
        messages: ["abobus", "amogus", "amoamomogus gus sus usus s sssssssssssss uuuuuU"],
        cardOptions: [
            {name: "aaaa", description: "asdsa", image: "cardPlaceholder.png"},
            {name: "aaaa", description: "asdsa", image: "cardPlaceholder.png"},
            {name: "aaaa", description: "asdsa", image: "cardPlaceholder.png"}],
        showCardChoice: false,
        gameState: {
            Players: [],
            Characters: [],
            Player: {
                Coins: 0,
                Crown: false,
                City: [],
                Hand: [],
                Character: {
                    name: "???",
                    description: "??????????",
                    image: "Unknown.png",
                    type: null,
                },
            },
            DeckSize: 0,
            DeckActive: false,
            GameBankActive: false,
            EndTurnActive: false,
        }
    },
    mutations: {
        SetPlayerName(state, name) {
            state.selfPlayerName = name;
        },
        SetRoomCode(state, code) {
            state.roomCode = code;
        },
        SetIsHost(state, isHost) {
            state.isHost = isHost;
        },
        SetPlayerList(state, playerList) {
            if (playerList !== null) {
                state.lobbyPlayerList = playerList;
            }
            else {
                throw new Error("playerList is null");
            }
        },
        SetDeckSize(state, deckSize) {
            state.gameState.DeckSize = deckSize;
        },
        SetDeckActive(state, deckActive) {
            state.gameState.DeckActive = deckActive;
        },
        SetGameBankActive(state, gameBankActive) {
            state.gameState.GameBankActive = gameBankActive;
        },
        SetEndTurnActive(state, endTurnActive) {
            state.gameState.EndTurnActive = endTurnActive;
        },
        SetCoins(state, coins) {
            state.gameState.Player.Coins = coins;
        },
        SetCrown(state, crown) {
            state.gameState.Player.Crown = crown;
        },
        SetSelfCharacterName(state, name) {
            state.gameState.Player.Character.name = name;
        },
        SetSelfCharacterDescription(state, description) {
            state.gameState.Player.Character.description = description;
        },
        SetSelfCharacterImage(state, image) {
            state.gameState.Player.Character.image = image;
        },
        SetSelfCharacterType(state, type) {
            state.gameState.Player.Character.type = type;
        }
    },
    actions: {
        SetMiscData({ commit }, data) {
            commit("SetDeckSize", data.DeckSize);
            commit("SetDeckActive", data.DeckActive);
            commit("SetGameBankActive", data.GameBankActive);
            commit("SetEndTurnActive", data.EndTurnActive);
        },
        SetPlayer({ commit, dispatch }, player) {
            commit("SetCoins", player.Coins);
            commit("SetCrown", player.Crown);
            dispatch("SetPlayerCharacter", player.Character);
        },
        SetPlayerCharacter({ commit }, character) {
            commit("SetSelfCharacterName", character.name);
            commit("SetSelfCharacterDescription", character.description);
            commit("SetSelfCharacterImage", character.image);
            commit("SetSelfCharacterType", character.type);
        },
    },
    namespaced: true
}