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
                    dispatch("OpenDialog", {header, content});
                }
                else {
                    const header = "УСПЕХ!!!!!!";
                    const content = message["payload"]["message"];
                    dispatch("OpenDialog", {header, content});
                }
            }
            else if (message["type"] === "lobby_start_game") {
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
                commit("gameInfo/SetPlayerList", message.payload.state.members, { root: true });
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
            else if (message["type"] === "game_state_update") {
                dispatch("gameInfo/SetMiscData", message.payload.state, { root: true });
                dispatch("gameInfo/SetPlayer", message.payload.state.Player, { root: true });

                var city = message.payload.state.Player.Town;
                for (var i = 0; i < message.payload.state.Player.Town.length; i++) {
                    city[i].id = i;
                }
                commit("gameInfo/SetCity", city, { root: true });

                var hand = message.payload.state.Player.Hand;
                for (var i = 0; i < message.payload.state.Player.Hand.length; i++) {
                    hand[i].id = i;
                }
                commit("gameInfo/SetHand", hand, { root: true });
            }
        },
        OpenDialog({ rootState, commit }, payload) {
            commit("componentInfo/ShowDialog", null, { root: true });
            commit("componentInfo/SetDialogHeader", payload.header, { root: true });
            console.log(payload.content);
            commit("componentInfo/SetDialogContent", payload.content, { root: true });
        }
    },
    namespaced: true
};