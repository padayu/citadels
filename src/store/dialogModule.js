export default {
    state: {
        dialog_visible: false,
        dialog_header: "",
        dialog_content: "",
    },
    getters: {
    },
    mutations: {
        ShowDialog(state) {
            state.dialog_visible = true;
        },
        HideDialog(state) {
            state.dialog_visible = false;
        },
        SetDialogHeader(state, header) {
            state.dialog_header = header;
        },
        SetDialogContent(state, content) {
            state.dialog_content = content;
        }
    },
    actions: {
        OpenDialog({ rootState, commit }, payload) {
            commit("dialog/ShowDialog", null, { root: true });
            commit("dialog/SetDialogHeader", payload.header, { root: true });
            console.log(payload.content);
            commit("dialog/SetDialogContent", payload.content, { root: true });
        }
    },
    namespaced: true
}