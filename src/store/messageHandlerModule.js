import {Vue} from "vue-class-component";

export default {
    state: {
    },
    actions: {
        HandleMessage({ rootState, commit, dispatch }, message) {
            if (message["type"] === "status_code") {
                if (message["payload"]["status"] !== 200) {
                    const header = "Ошибка";
                    const content = message["payload"]["message"];
                    dispatch("dialog/OpenDialog", {header, content}, { root: true });
                }
                else {/*
                    const header = "УСПЕХ!!!!!!";
                    const content = message["payload"]["message"];
                    dispatch("OpenDialog", {header, content});*/
                }
            }
            else if (message["type"] === "lobby_game_started") {
                Vue.router.push({name: "game"});
            }
            else if (message["type"] === "lobby_created") {
                commit("gameInfo/SetRoomCode", message.payload.code, { root: true });
                commit("gameInfo/SetIsHost", true, { root: true });
                dispatch("websocket/sendMessage",
                    {"type": "lobby_join",
                        "payload": {"name": rootState.gameInfo.selfPlayerName, "code": message.payload.code}},
                    { root: true })
            }
            else if (message["type"] === "lobby_info") {
                commit("gameInfo/SetLobbyPlayerList", message.payload.state.members, { root: true });
                commit("gameInfo/SetRoomCode", message.payload.state.code, { root: true });
                commit("gameInfo/SetIsHost", message.payload.state.host === rootState.gameInfo.selfPlayerName, { root: true });
                if (Vue.router.currentRoute.value.name !== "room") {
                    Vue.router.push({name: "room"});
                }
            }
            else if (message["type"] === "lobby_kicked") {
                Vue.router.push({name: "home"});
                const header = "Покеда";
                const content = "Вас выгнали из лобби"
                dispatch("OpenDialog", {header, content});

            }
            else if (message["type"] === "game_info") {
                if (message.payload.state.stage === "character_selection") {
                    console.log("character selection");
                    commit("gameInfo/OpenCharacterChoice", message.payload.state.characters, { root: true });
                }
                else {
                    commit("gameInfo/CloseCharacterChoice", null, { root: true });
                }
                dispatch("gameInfo/SetMiscData", message.payload.state, { root: true });
                dispatch("gameInfo/SetPlayer", message.payload.state.player, { root: true });
                commit("gameInfo/SetGamePlayerList", message.payload.state.players, { root: true });

                commit("gameInfo/SetCity", message.payload.state.player.town, { root: true });

                commit("gameInfo/SetHand", message.payload.state.player.hand, { root: true });

            }
            else if (message["type"] === "game_chat") {
                commit("gameInfo/AddChatMessage", message.payload.message, { root: true });
            }
            else if (message["type"] === "game_choose_cards") {
                commit("gameInfo/OpenCardChoice", message.payload.cards, { root: true });
            }
            else if (message["type"] === "game_final_scores") {
                commit("gameInfo/OpenScoreboard", message.payload.scores, { root: true });
            }
        },
    },
    namespaced: true
};