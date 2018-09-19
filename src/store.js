import Vue from "vue";
import Vuex from "vuex";
import InfoService from "@/services/InfoService";
import { auth } from "@/stores/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {
    infos: []
  },
  mutations: {
    FETCH_INFOS(state, infos) {
      state.infos = infos;
    },
    CREATE_INFO(state, info) {
      state.infos.push(info);
    },
    DELETE_INFO(state, index) {
      state.infos.splice(index, 1);
    }
  },
  actions: {
    fetchInfos({ commit }) {
      InfoService.getInfos().then(
        response => {
          commit("FETCH_INFOS", response.data.results);
        },
        error => {
          console.log(error.statusText);
        }
      );
    },
    createInfo({ commit }, payload) {
      InfoService.createInfo(payload.name, payload.title, payload.body).then(
        response => {
          commit("CREATE_INFO", response.data.results);
        }
      );
    },
    deleteInfo({ commit }, payload) {
      InfoService.deleteInfo(payload.id).then(() =>
        commit("DELETE_INFO", payload.index)
      );
    }
  }
});
