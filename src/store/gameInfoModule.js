import {setDefaultCardImages} from "@/utility";

export default {
    state: {
        selfPlayerName: "",
        roomCode: "",
        isHost: false,
        lobbyPlayerList: [],
        choosableCharacters: [],
        showCharacterChoice: false,
        chatMessages: [],
        cardOptions: [],
        showCardChoice: false,
        showScoreboard: false,
        scoreboard: [{"name": "ads", "score": 23},
            {"name": "ads", "score": 23},
            {"name": "ads", "score": 23}],
        gameState: {
            AbilityPending: false,
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
                    abilities: [],
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
        SetLobbyPlayerList(state, playerList) {
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
            if (image === "" || image == null) {
                image = "Unknown.png";
            }
            state.gameState.Player.Character.image = image;
        },
        SetSelfCharacterType(state, type) {
            state.gameState.Player.Character.type = type;
        },
        SetCity(state, city) {
            state.gameState.Player.City = setDefaultCardImages(city);
        },
        SetHand(state, hand) {
            state.gameState.Player.Hand = setDefaultCardImages(hand);
        },
        SetGamePlayerList(state, players) {
            for (const player_id in players) {
                const player = players[player_id];
                player["town"] = setDefaultCardImages(player["town"]);
            }
            state.gameState.Players = players;
        },
        AddChatMessage(state, message) {
            state.chatMessages.push(message.text);
            if (state.chatMessages.length > 3) {
                state.chatMessages.shift();
            }
        },
        ClearChatMessages(state) {
            state.chatMessages = [];
        },
        OpenCardChoice(state, cards) {
            state.showCardChoice = true;
            state.cardOptions = setDefaultCardImages(cards);
        },
        CloseCardChoice(state) {
            state.showCardChoice = false;
        },
        SetCharacters(state, characters) {
            state.gameState.Characters = setDefaultCardImages(characters, 'Unknown.png');
        },
        OpenCharacterChoice(state, characters) {
            state.showCharacterChoice = true;
            state.choosableCharacters = setDefaultCardImages(characters, 'Unknown.png');
        },
        CloseCharacterChoice(state) {
            state.showCharacterChoice = false;
        },
        SetSelfCharacterAbilities(state, abilities) {
            state.gameState.Player.Character.abilities = abilities;
        },
        OpenScoreboard(state, scoreboard) {
            state.showScoreboard = true;
            state.scoreboard = scoreboard;
        },
        CloseScoreboard(state) {
            state.showScoreboard = false;
        },
        SetAbilityPending(state, value) {
            state.gameState.AbilityPending = value;
        }
    },
    actions: {
        SetMiscData({ commit }, data) {
            commit("SetDeckSize", data.main_deck_size);
            commit("SetDeckActive", data.main_deck_active);
            commit("SetGameBankActive", data.global_bank_active);
            commit("SetEndTurnActive", data.end_turn_active);
            commit("SetCharacters", data.characters);
        },
        SetPlayer({ commit, dispatch }, player) {
            commit("SetCoins", player.bank);
            commit("SetCrown", player.crown);
            dispatch("SetPlayerCharacter", player.characters[0]);
            commit("SetCity", player.town);
            commit("SetHand", player.hand);
        },
        SetPlayerCharacter({ commit }, character) {
            if (character == null) {
                character = {
                    name: "???",
                    description: "????????",
                    image: "Unknown.png",
                    type: null,
                };
            }
            commit("SetSelfCharacterName", character.name);
            commit("SetSelfCharacterDescription", character.description);
            commit("SetSelfCharacterImage", character.image);
            commit("SetSelfCharacterAbilities", character.abilities);
            commit("SetSelfCharacterType", character.class);
        },
        ClearEverything({ commit }) {
            commit("SetPlayerName", "");
            commit("SetRoomCode", "");
            commit("SetIsHost", false);
            commit("SetLobbyPlayerList", []);
            commit("SetDeckSize", 0);
            commit("SetDeckActive", false);
            commit("SetGameBankActive", false);
            commit("SetEndTurnActive", false);
            commit("SetCoins", 0);
            commit("SetCrown", false);
            commit("SetSelfCharacterName", "???");
            commit("SetSelfCharacterDescription", "??????????");
            commit("SetSelfCharacterImage", "Unknown.png");
            commit("SetSelfCharacterType", null);
            commit("SetCity", []);
            commit("SetHand", []);
            commit("SetGamePlayerList", []);
            commit("AddChatMessage", {text: "Welcome to the chat!"});
            commit("CloseCardChoice");
            commit("CloseCharacterChoice");
            commit("SetCharacters", []);
            commit("SetSelfCharacterAbilities", []);
        }
    },
    namespaced: true
}