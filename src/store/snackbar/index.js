const state = {
  snackbar: {
    show: false,
    message: `It's alive`,
    timeout: 2000,
    "bg-color": "success",
  },
};

const actions = {
  showSuccess({ commit }, payload) {
    commit("setSuccessSnackBar", payload);
  },
  addToOrder({ commit }, payload) {
    commit("setSuccessSnackBar", payload);
  },
  showError({ commit }, error) {
    commit("showError", error.message);
  },
  showWarning({ commit }, message) {
    commit("showWarning", message);
  },
  hide({ commit }) {
    commit("hide");
  },
};

const mutations = {
  setSuccessSnackBar(state, payload) {
    state.snackbar = {
      ...state.snackbar,
      show: true,
      message: payload.message,
      timeout: 1500,
      "bg-color": "success",
    };
  },
  showWarning(state, payload) {
    state.snackbar = {
      ...state.snackbar,
      show: true,
      success: false,
      warning: true,
      message: payload.message,
      timeout: 3000,
      "bg-color": "warning",
    };
  },
  showError(state, message) {
    state.snackbar = {
      ...state.snackbar,
      show: true,
      message,
      timeout: 0,
      "bg-color": "warning",
    };
  },

  hide(state) {
    state.snackBar = {
      ...state.snackbar,
      show: false,
      message: "",
      timeout: 2000,
      "bg-color": "success",
    };
  },
};

const getters = {
  getSnackbar(state) {
    return state.snackbar;
  },
};

export const snackBar = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
};
