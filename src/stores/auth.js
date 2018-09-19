import SessionService from "@/services/SessionService";
import router from "@/router";

export const auth = {
  state: {
    authenticated: false,
    user: {}
  },
  mutations: {
    SIGN_IN(state, user) {
      state.user = user;
      state.authenticated = true;
    },
    SET_AUTH(state, user) {
      state.user = user;
      state.authenticated = true;
    },
    SIGN_OUT(state) {
      state.user = {};
      state.authenticated = false;
    }
  },
  actions: {
    authenticate({ commit }, payload) {
      SessionService.logIn(payload.email, payload.password).then(response => {
        commit("SIGN_IN", response.data.user);
        if (payload.redirect) {
          router.push(payload.redirect);
        }
      });
    },
    checkAuth({ commit }) {
      SessionService.checkAuthenticated().then(response => {
        if (response.data.authenticated) {
          commit("SET_AUTH", response.data.user);
        }
      });
    },
    signOut({ commit }) {
      SessionService.logOut().then(() => {
        commit("SIGN_OUT");
        router.push("/");
      });
    }
  }
};
