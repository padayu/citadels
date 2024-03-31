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
            console.log("SetDialogContent: ", content);
        }
    },
    actions: {
    },
    namespaced: true
}